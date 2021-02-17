import { Market } from './../../model/market';
import { Asset } from './../../model/asset';
import { UpgradableComponent } from 'theme/components/upgradable';
import { BackendService } from './../../services/backend/backend.service';
import { UtilService } from './../../services/util/util.service';
import { AlertService } from './../alert/alert.service';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'markets-table',
  templateUrl: './markets-table.component.html',
  styleUrls: ['./markets-table.component.scss']
})
export class MarketsTableComponent extends UpgradableComponent implements OnInit {
  // SCSS
  public readonly Array = Array;
  @HostBinding('class.mdl-grid') public readonly mdlGrid = true;
  @HostBinding('class.mdl-cell') public readonly mdlCell = true;
  @HostBinding('class.mdl-cell--12-col-desktop') public readonly mdlCell12ColDesktop = true;
  @HostBinding('class.mdl-cell--12-col-tablet') public readonly mdlCell12ColTablet = true;
  @HostBinding('class.mdl-cell--4-col-phone') public readonly mdlCell4ColPhone = true;
  @HostBinding('class.mdl-cell--top') public readonly mdlCellTop = true;
  @HostBinding('class.ui-tables') public readonly uiTables = true;

  // array of assets from api service
  private marketData: Market[] = [];

  //table parameters
  currentPage = 1;
  countPerPage = 5;
  numPage = 0;
  tableData: Market[] = [];

  constructor(
    private alertService: AlertService,
    private utilService: UtilService,
    private backendService: BackendService
  ) {
    super();
  }

  ngOnInit(): void {
    this.getMarketData();
  }

  // get all market data and fill table data
  private getMarketData() {
    this.backendService.getBitcoinMarkets().subscribe((response) => {
      const responseAsString: string = JSON.stringify(response);
      console.log("market data ->" + responseAsString);
      if (responseAsString.includes("Error")) {
        this.alertService.warn(responseAsString);
      } else {
        this.marketData = [];
        this.marketData = this.utilService.response2MarketDataMapper(response);
        this.numPage = Math.ceil(this.marketData.length / this.countPerPage);
        this.tableData = [];
        this.tableData = this.marketData;
        this.tableData = this.getTablePage(1, this.countPerPage);
      }

    });
  }

  public getTableNumOfPage(countPerPage) {
    return Math.ceil(this.tableData.length / countPerPage);
  }

  public changePage(page, force = false) {
    if (page !== this.currentPage || force) {
      this.currentPage = page;
      this.tableData = this.getTablePage(page, this.countPerPage);
    }
  }

  public getTablePage(page, countPerPage) {
    return this.marketData.slice(
      (page - 1) * countPerPage,
      page * countPerPage
    );
  }

  public getTableHeaders() {
    return [
      {
        name: "Market",
        sort: null,
      },
      {
        name: "Pair",
        sort: null,
      },
      {
        name: "Price",
        sort: 0,
      },
    ];
  }

  public tableHeaders = this.getTableHeaders();
}
