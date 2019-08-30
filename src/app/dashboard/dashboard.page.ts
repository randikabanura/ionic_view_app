import { Component, OnInit } from '@angular/core';
import {PopoverController} from "@ionic/angular";
import {DashboardPopoverComponent} from "../dashboard-popover/dashboard-popover.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public popOverContoller: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(){
    const popover = await this.popOverContoller.create(({
      component: DashboardPopoverComponent,
      event
    }))
    return await popover.present();
  }

}
