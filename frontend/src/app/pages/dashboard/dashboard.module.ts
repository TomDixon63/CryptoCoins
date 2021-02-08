import { AssetsTableComponent } from './../../components/assets-table/assets-table.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from 'theme';
import { DashboardComponent } from './dashboard.component';
import { WatchlistComponent} from './../../components/watchlist/watchlist.component';
@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
  ],
  declarations: [
    DashboardComponent,
    AssetsTableComponent,
    WatchlistComponent
  ]
})
export class DashboardModule { }
