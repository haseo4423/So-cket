import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'timeRegistration', loadChildren: './time-registration/time-registration.module#TimeRegistrationPageModule' },
  { path: 'dailyReport', loadChildren: './daily-report/daily-report.module#DailyReportPageModule' },
  { path: 'dreamSource', loadChildren: './dream-source/dream-source.module#DreamSourcePageModule' },
  { path: 'configuration', loadChildren: './configuration/configuration.module#ConfigurationPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
