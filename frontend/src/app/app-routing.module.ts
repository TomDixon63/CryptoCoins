import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutsModule } from './layouts';
import { CommonLayoutComponent } from './layouts/common-layout';
import { DashboardComponent } from './pages/dashboard';
import { DetailsComponent } from './pages/details/details.component';


// @ts-ignore
// @ts-ignore
// @ts-ignore
@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'app/dashboard', pathMatch: 'full' },
        {
          path: 'app', component: CommonLayoutComponent, children: [
            { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
            { path: 'details', component: DetailsComponent, pathMatch: 'full' },
          //  { path: '**', component: ErrorComponent, pathMatch: 'full' },
          ]
        },
        //{ path: '**', component: ErrorComponent, pathMatch: 'full' },
      ],
      { useHash: true },
    ),
    LayoutsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
