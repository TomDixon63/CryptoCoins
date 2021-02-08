import { AlertService } from "./../../components/alert/alert.service";
import { UpgradableComponent } from "theme/components/upgradable";
import { Component, OnInit, HostBinding } from "@angular/core";

@Component({
  selector: "app-compare",
  templateUrl: "./compare.component.html",
  styleUrls: ["./compare.component.scss"],
})
export class CompareComponent extends UpgradableComponent implements OnInit {
  // SCSS
  @HostBinding("class.mdl-grid") public readonly mdlGrid = true;
  @HostBinding("class.mdl-grid--no-spacing")
  public readonly mdlGridNoSpacing = true;

  // alert options
  public options = {
    autoClose: false,
    keepAfterRouteChange: false,
  };



  constructor(

    private alertService: AlertService
  ) {
    super();
  }

  ngOnInit(): void {}

}
