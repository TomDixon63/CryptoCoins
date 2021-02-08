import { AlertService } from "./../../components/alert/alert.service";
import { Router } from "@angular/router";
import {
  Component,
  HostBinding,
  OnInit,
  Output,
  EventEmitter,
} from "@angular/core";

import { UpgradableComponent } from "theme/components/upgradable";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
})
export class SearchComponent extends UpgradableComponent implements OnInit {
  // SCSS
  @HostBinding("class.mdl-grid") public readonly mdlGrid = true;
  @HostBinding("class.mdl-grid--no-spacing")
  public readonly mdlGridNoSpacing = true;

  jsonData: any;

  //alert options
  public options = {
    autoClose: false,
    keepAfterRouteChange: false,
  };

  //table headers
  public headers = [
    "Symbol",
    "Name",
    "Type",
    "Region",
    "Currency",
    "Matchscore",
  ];


  constructor(

    private alertService: AlertService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {}


  // navigate to details page
  public navigateToDetailsPage(symbol: string) {
    var url: string = "/app/details?symbol=" + symbol;
    this.router.navigateByUrl(url);
  }
}
