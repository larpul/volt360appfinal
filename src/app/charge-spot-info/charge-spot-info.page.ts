import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-charge-spot-info',
  templateUrl: './charge-spot-info.page.html',
  styleUrls: ['./charge-spot-info.page.scss'],
})
export class ChargeSpotInfoPage implements OnInit {
  favoriteClass = false;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  addTofavorite() {
    this.favoriteClass = !this.favoriteClass;
  }

  add_check_in() {
    this.route.navigate(['./add-check-in']);
  }
}
