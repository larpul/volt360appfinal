import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCheckInPageRoutingModule } from './add-check-in-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { AddCheckInPage } from './add-check-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AddCheckInPageRoutingModule
  ],
  declarations: [AddCheckInPage]
})
export class AddCheckInPageModule { }
