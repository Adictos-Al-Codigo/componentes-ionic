import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ionic-alert',
  templateUrl: './ionic-alert.page.html',
  styleUrls: ['./ionic-alert.page.scss'],
})
export class IonicAlertPage implements OnInit {

  constructor(private alertController:AlertController) { }

  ngOnInit() {
  }

  public alertButtons = ['OK'];

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'Esto es una alerta con controllador =D',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
