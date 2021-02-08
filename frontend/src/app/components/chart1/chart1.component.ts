import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit {

  multi:any[]  = [
    {
      "name": "USA",
      "series": [
        {
          "name": "1990",
          "value": 150
        },
        {
          "name": "2005",
          "value": 170
        },
        {
          "name": "2010",
          "value": 199
        },
        {
          "name": "2011",
          "value": 241
        }
      ]
    },


  ];

  view: any[] = [1000, 500];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Month';
  yAxisLabel: string = 'name';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };


  constructor() { }

  ngOnInit(): void {
  }

}
