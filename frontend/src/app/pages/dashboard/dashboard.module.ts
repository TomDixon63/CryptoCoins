import { WatchlistTableComponent } from './../../components/watchlist-table/watchlist-table.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from 'theme';
import { DashboardComponent } from './dashboard.component';
import { MarketsTableComponent } from './../../components/markets-table/markets-table.component';
import { AssetsTableComponent } from './../../components/assets-table/assets-table.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
  ],
  declarations: [
    DashboardComponent,
    AssetsTableComponent,
    MarketsTableComponent,
    WatchlistTableComponent
  ]
})
export class DashboardModule { }
