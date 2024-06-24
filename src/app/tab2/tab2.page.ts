import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  alertController : AlertController;

  constructor(alertController : AlertController) {
    this.alertController = alertController;
  }
  async creatinganAlert() {
    const alert = await this.alertController.create({
     header: 'Birthday',
     message: 'Your friend\'s birthday is on this date, remember to buy a gift',
     buttons: ['Okay']
    });
    await alert.present();
  }

  async creatinganAlert2() {
    const alert = await this.alertController.create({
     header: 'Vacation',
     message: 'Your vacation to Barcelona is on this date, remember to buy tickets',
     buttons: ['Okay']
    });
    await alert.present();
  }

  async creatinganAlert3() {
    const alert = await this.alertController.create({
     header: 'Wedding',
     message: 'Your friend\'s wedding is on this date, remember to RSVP',
     buttons: ['Okay']
    });
    await alert.present();
  }
}
