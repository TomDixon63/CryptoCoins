import { ComponentsModule } from './../../components/components.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from 'theme';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
    ComponentsModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
