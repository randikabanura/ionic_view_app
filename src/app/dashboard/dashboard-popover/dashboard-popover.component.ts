import {Component, OnInit} from '@angular/core';
import {PopoverController, NavController, AlertController, Platform} from "@ionic/angular";
import { Router } from '@angular/router';

import {LocalNotifications} from '@ionic-native/local-notifications/ngx';

@Component({
    selector: 'app-dashboard-popover',
    templateUrl: './dashboard-popover.component.html',
    styleUrls: ['./dashboard-popover.component.scss'],
})
export class DashboardPopoverComponent implements OnInit {

    constructor(public popoverController: PopoverController, public navCtrl: NavController, public alertCtrl: AlertController, public plt: Platform, public localNotifications: LocalNotifications, public router: Router) {
        this.plt.ready().then((rdy) => {
            this.localNotifications.on('click').subscribe(async (notification) => {
                let json = JSON.parse(notification.data);

                let alert = await this.alertCtrl.create({
                    header: notification.title,
                    subHeader: json.mydata
                });
                await alert.present();
            });
        });
    }

    ngOnInit() {
    }

    doc() {
        window.open('')
        this.popoverController.dismiss();
    }

    close() {
        this.popoverController.dismiss();
    }

    scheduleNotifications() {
        this.localNotifications.schedule({
            id: 1,
            title: 'Attention',
            text: 'Some Notifications',
            trigger: {at: new Date(new Date().getTime() + 5 * 1000)},
            data: {mydata: 'Sync has completed'}
        });
    }

    navigateToSettings() {
        this.close();
        this.router.navigate(['settings']);
    }
}
