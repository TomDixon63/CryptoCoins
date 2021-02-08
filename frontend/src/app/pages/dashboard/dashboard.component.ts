import { BackendService } from "./../../services/backend/backend.service";
import { AlertService } from "./../../components/alert/alert.service";
import { UtilService } from "./../../services/util/util.service";
import { DatabaseService } from "./../../services/database/database.service";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { Component, HostBinding } from "@angular/core";
import { UpgradableComponent } from "theme/components/upgradable";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent extends UpgradableComponent {
  // SCSS
  @HostBinding("class.mdl-grid") public readonly mdlGrid = true;
  @HostBinding("class.mdl-grid--no-spacing")
  public readonly mdlGridNoSpacing = true;

  //TODO: move to a central position
  // alert options
  public options = {
    autoClose: false,
    keepAfterRouteChange: false,
  };

  // watchlist
  //public watchList: Stock[] = [];

  constructor(
    private router: Router,
    private databaseService: DatabaseService,
    private utilService: UtilService,
    private alertService: AlertService,
    private location: Location,

  ) {
    super();
  }

  // get nasdag100 list on app start, after that from database serrvice (actual only local storage)
  // to avoid too many requests to marketstack
  // add empty watchList to local storage on app start
  ngOnInit() {
    /*
    if (this.databaseService.getNasdaqList()) {
      this.nasdaqList = this.databaseService.getNasdaqList();
    } else {
      this.getNasdaq100Stocks()
    }
    if (this.databaseService.getWatchList()) {
      this.watchList = this.databaseService.getWatchList();
    } else {
      this.databaseService.setWatchList(this.watchList);
    }
    */
  }



  //TODO: refactor, is copy of method in search.component.ts
  // navigate to details page
  public navigateToDetailsPage(symbol: string) {
    var url: string = "/app/details?symbol=" + symbol;
    this.router.navigateByUrl(url);
  }

  //TODO: refactor, is copy of method in search.component.ts
  // navigate back
  public navigateBack() {
    this.location.back();
  }

  // add stock to watchlist from nasdaq list
  /*
  public addToWatchList(stock: Stock) {
    this.databaseService.addToWatchList(stock);
   // this.watchList = this.databaseService.getWatchList();
    this.alertService.info("Stock added to watchlist.");
  }

  // remove stock from watchlist
  public removeFromWatchList(symbol: string) {
    this.databaseService.removeFromWatchList(symbol);
   // this.watchList = this.databaseService.getWatchList();
    this.alertService.info("Stock removed from watchlist.");
  }
  */
}
