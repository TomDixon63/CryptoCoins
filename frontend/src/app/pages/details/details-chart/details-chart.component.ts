import { UtilService } from './../../../services/util/util.service';
import { AlertService } from './../../../components/alert/alert.service';
import { BackendService } from './../../../services/backend/backend.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'details-chart',
  templateUrl: './details-chart.component.html',
  styleUrls: ['./details-chart.component.scss']
})
export class DetailsChartComponent implements OnInit {

  // data
  chartData: any[] = [];

  // view window
  view: any[] = [1200, 400];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'Price $';
  timeline: boolean = true;

  //colors
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(
    private route: ActivatedRoute,
    private backendService: BackendService,
    private utilService: UtilService,
    private alertService: AlertService) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params.id) {
        this.getAssetHistory(params.id);
        // nur test: this.mapResponse2ChartData();
      }
    });

  }

  // get asset history for chart data
  private getAssetHistory(id: string) {
    this.backendService.getAssetHistory(id).subscribe((response) => {
      const responseAsString: string = JSON.stringify(response);
      console.log(responseAsString);
      if (responseAsString.includes("Error")) {
        this.alertService.warn(responseAsString);
      } else {
        console.log(response);
        this.mapResponse2ChartData(response);
      }
    });
  }

  // map reponse data to chart data
 private mapResponse2ChartData(response: any) {

    // clear  dataset
    this.chartData = [
      {
        name: '',
        series: [],
      },
    ];

    // map data and push to chart
    let i = 1; // to realize an interval of a month (31 days) starting from latest date
    let data: any[] = response.data;
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        if (i ==  data.length || i % 30 == 0) {
          let element = data[key];
          this.chartData[0].series.push({
            name: this.utilService.dateConverter(element["time"]),
            value: this.utilService.fixedDecimalConverter(element["priceUsd"]),

          });
        }
        i++;
      }
    }
  }
}









