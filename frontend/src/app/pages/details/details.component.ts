import { Asset } from './../../model/asset';

import { BackendService } from "./../../services/backend/backend.service";

import { AlertService } from "./../../components/alert/alert.service";
import { UtilService } from "./../../services/util/util.service";
import { DatabaseService } from "./../../services/database/database.service";
import { Component, HostBinding, OnInit } from "@angular/core";
import { UpgradableComponent } from "theme/components/upgradable";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
})
export class DetailsComponent extends UpgradableComponent implements OnInit {
  // SCSS
  @HostBinding("class.mdl-grid") public readonly mdlGrid = true;
  @HostBinding("class.mdl-grid--no-spacing")
  public readonly mdlGridNoSpacing = true;

  // alert options
  public options = {
    autoClose: false,
    keepAfterRouteChange: false,
  };

  // asset
  public asset: Asset;

  // actual date
  public actualDate = new Date().toLocaleString();

  constructor(
    private route: ActivatedRoute,
    private backendService: BackendService,
    private databaseService: DatabaseService,
    private alertService: AlertService,
    private utilService: UtilService,
    private location: Location
  ) {
    super();
  }

  // get asset id from url, get asset
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params.id) {
        this.getAsset(params.id);
      } else {
        this.alertService.error("No stock symbol provided!");
      }
    });
  }

  // get asset
  private getAsset(id: string) {
    this.backendService.getAsset(id).subscribe((response) => {
      const responseAsString: string = JSON.stringify(response);
      if (responseAsString.includes("Error")) {
        this.alertService.warn(responseAsString);
      } else {
        this.asset = this.utilService.response2AssetMapper(response);
      }
    });
  }

  // navigate back
  public navigateBack() {
    this.location.back();
  }

  // add share to watchlist
  public addToWatchList() {
    // this.databaseService.addToWatchList(this.shareDetails);
  }
}
