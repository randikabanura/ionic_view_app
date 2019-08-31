import { ThemeService } from "./../../services/theme.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"]
})
export class SettingsPage implements OnInit {
  status = false;
  constructor(public theme: ThemeService) {}

  ngOnInit() {}

  toggleTheme() {
    if (this.status) this.theme.enableDark();
    else this.theme.enableLight();
  }
}
