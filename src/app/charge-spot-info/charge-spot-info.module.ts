import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChargeSpotInfoPageRoutingModule } from './charge-spot-info-routing.module';

import { TranslateModule } from '@ngx-translate/core';
 

import { ChargeSpotInfoPage } from './charge-spot-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ChargeSpotInfoPageRoutingModule
  ],
  declarations: [ChargeSpotInfoPage]
})
export class ChargeSpotInfoPageModule {}
