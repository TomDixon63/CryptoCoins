import { Router } from '@angular/router';
import { UtilService } from './../../services/util/util.service';
import { BackendService } from './../../services/backend/backend.service';
import { Asset } from './../../model/asset';
import { UpgradableComponent } from 'theme/components/upgradable';
import { Component, OnInit, HostBinding } from '@angular/core';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'assets-table',
  templateUrl: './assets-table.component.html',
  styleUrls: ['./assets-table.component.scss'],
})
export class AssetsTableComponent
  extends UpgradableComponent
  implements OnInit {

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
  private assets: Asset[] = [];

  //table parameters
  currentPage = 1;
  countPerPage = 5;
  numPage = 0;
  tableData: Asset[] = [];

  constructor(
    private router: Router,
    private alertService: AlertService,
    private utilService: UtilService,
    private backendService: BackendService
  ) {
    super();
  }

  ngOnInit(): void {
    this.getAllAssets();
  }

  // get all assets and fill table data
  private getAllAssets() {
    this.backendService.getAllAssets().subscribe((response) => {
      console.log(response);
      const responseAsString: string = JSON.stringify(response);
      if (responseAsString.includes("Error")) {
        this.alertService.warn(responseAsString);
      } else {
        this.assets = [];
        this.assets = this.utilService.response2AssetsMapper(response);
        this.numPage = Math.ceil(this.assets.length / this.countPerPage);
        this.tableData = [];
        this.tableData = this.assets;
        this.tableData = this.getTablePage(1, this.countPerPage);
      }

    });
  }

   // navigate to details page
   public navigateToDetailsPage(id: string) {
    var url: string = "/app/details?id=" + id;
    this.router.navigateByUrl(url);
  }

  //TODO: -> generic component for all tables

  public readonly sortOrder = {
    asc: 1,
    desc: -1,
  };

  public getTableNumOfPage(countPerPage) {
    console.log(
      "-> getTableNumOfPage: curentPage: " +
      this.currentPage +
      " numPage:" +
      this.numPage +
      " tableData.length:" +
      this.tableData.length
    );
    return Math.ceil(this.tableData.length / countPerPage);
  }

  public changePage(page, force = false) {
    console.log(
      "-> changePage: page: " +
      page +
      " numPage:" +
      this.numPage +
      " tableData.length:" +
      this.tableData.length
    );
    if (page !== this.currentPage || force) {
      this.currentPage = page;
      this.tableData = this.getTablePage(page, this.countPerPage);
    }
  }

  public getTablePage(page, countPerPage) {
    console.log(
      "-> getTablePage: page: " +
      page +
      " numPage:" +
      this.numPage +
      " tableData.length:" +
      this.tableData.length
    );
    return this.assets.slice(
      (page - 1) * countPerPage,
      page * countPerPage
    );
  }

  public getTableHeaders() {
    return [
      {
        name: "Rank",
        sort: null,
      },
      {
        name: "",
        sort: null,
      },
      {
        name: "Name",
        sort: 0,
      },
      {
        name: "Price",
        sort: null,
      },
      {
        name: "Market Cap",
        sort: null,
      },
      {
        name: "VWAP (24h)",
        sort: null,
      },
      {
        name: "Supply",
        sort: null,
      },
      {
        name: "Volume (24h)",
        sort: null,
      },
      {
        name: "Change (24h)",
        sort: null,
      },
    ];
  }

  public tableHeaders = this.getTableHeaders();

  /* available sort value:
  -1 - desc; 	0 - no sorting; 1 - asc; null - disabled */
  public changeSorting(header, index) {
    const current = header.sort;
    console.log("current: " + current + " index: " + index);
    if (current !== null) {
      this.tableHeaders.forEach((cell) => {
        cell.sort = cell.sort !== null ? 0 : null;
      });
      header.sort = current === 1 ? -1 : 1;
      this.changeAdvanceSorting(header.sort, index);
      this.changePage(1, true);
    }
  }

  public changeAdvanceSorting(order, index) {
    this.assets = this.sorting(this.assets, order, index);
  }

  public sorting(array, order, value) {
    console.log(
      "-> sorting :" +
      " array: " +
      array +
      " order: " +
      order +
      " value: " +
      value
    );
    const compareFunction = (a, b) => {
      console.log(a[value] + ", " + b[value]);
      if (a[value] > b[value]) {
        return 1 * order;
      }
      if (a[value] < b[value]) {
        return -1 * order;
      }
      return 0;
    };
    return array.sort(compareFunction);
  }
}
