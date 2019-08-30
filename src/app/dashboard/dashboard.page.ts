import { Component, OnInit } from '@angular/core';
import {PopoverController} from "@ionic/angular";
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import {DashboardPopoverComponent} from "./dashboard-popover/dashboard-popover.component";
import {CardPopoverComponent} from "./card-popover/card-popover.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public popOverContoller: PopoverController, public alertController: AlertController, public toastController: ToastController, public router: Router) { }

  ngOnInit() {
  }

  async presentPopover(){
    const popover = await this.popOverContoller.create(({
      component: DashboardPopoverComponent,
      event
    }))
    return await popover.present();
  }

  async presentCardPopover(){
    const popover = await this.popOverContoller.create(({
      component: CardPopoverComponent,
      event
    }))
    return await popover.present();
  }

  async presentToastAfterDeleteConfirm() {
    const toast = await this.toastController.create({
      message: 'Your operation succeeded.',
      duration: 3000
    });
    toast.present();
  }

  async presentToastAfterClickBookmark() {
    const toast = await this.toastController.create({
      message: 'Saved to bookmarks.',
      duration: 3000
    });
    toast.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.presentToastAfterDeleteConfirm();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  navigateToAdd() {
    this.router.navigate(['add']);
  }

}
