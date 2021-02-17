import { Asset } from './../../model/asset';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'watchlist-table',
  templateUrl: './watchlist-table.component.html',
  styleUrls: ['./watchlist-table.component.scss']
})
export class WatchlistTableComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
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
        name: "Change (24h)",
        sort: null,
      },
      {
        name: "",
        sort: null,
      },
    ];
  }

  public tableHeaders = this.getTableHeaders();

}
