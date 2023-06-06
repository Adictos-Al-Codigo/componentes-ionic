import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicAlertPageRoutingModule } from './ionic-alert-routing.module';

import { IonicAlertPage } from './ionic-alert.page';
import { ComponenteModule } from '../componente/componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicAlertPageRoutingModule,
    ComponenteModule
  ],
  declarations: [IonicAlertPage]
})
export class IonicAlertPageModule {}
