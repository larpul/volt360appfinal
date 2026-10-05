import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-add-check-in',
  templateUrl: './add-check-in.page.html',
  styleUrls: ['./add-check-in.page.scss'],
})
export class AddCheckInPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  home() {
    this.navCtrl.navigateRoot(['./home']);
  }
}
