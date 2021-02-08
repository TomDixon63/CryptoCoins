import { DetailsComponent } from './details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from 'theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DetailsChartComponent } from './details-chart/details-chart.component';
@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
    NgxChartsModule
  ],
  declarations: [
    DetailsComponent,
    DetailsChartComponent
  ],
})
export class DetailsModule { }
