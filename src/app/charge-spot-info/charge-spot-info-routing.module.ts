import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChargeSpotInfoPage } from './charge-spot-info.page';

const routes: Routes = [
  {
    path: '',
    component: ChargeSpotInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChargeSpotInfoPageRoutingModule {}
