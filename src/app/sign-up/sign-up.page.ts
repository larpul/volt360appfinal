import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private route: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }
  termsConditions() {
    this.route.navigate(['./terms-conditions']);
  }
  // continue() {
  //   this.navCtrl.navigateRoot(['./home']);
  // }
  continue() {
    this.route.navigate(['./verification']);
  }
}
