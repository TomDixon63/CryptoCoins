import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MarketsTableComponent } from './markets-table/markets-table.component';
import { WatchlistTableComponent } from './watchlist-table/watchlist-table.component';


@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [MarketsTableComponent, WatchlistTableComponent]
})
export class ComponentsModule { }
