import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicAlertPage } from './ionic-alert.page';

const routes: Routes = [
  {
    path: '',
    component: IonicAlertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicAlertPageRoutingModule {}
