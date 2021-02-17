import { ThemeModule } from './../../theme/theme.module';
import { AssetsTableComponent } from './assets-table/assets-table.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MarketsTableComponent } from './markets-table/markets-table.component';
import { WatchlistTableComponent } from './watchlist-table/watchlist-table.component';


@NgModule({
  imports: [CommonModule, ThemeModule, FormsModule],
  declarations: [AssetsTableComponent, MarketsTableComponent, WatchlistTableComponent],
  exports: [AssetsTableComponent, MarketsTableComponent, WatchlistTableComponent]
})
export class ComponentsModule { }
