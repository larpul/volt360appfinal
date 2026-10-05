import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  segment: string = "near_by";
  showSpot1: boolean;
  showSpot2: boolean;
  showSpot3: boolean;
  showSpot4: boolean;
  showSpot5: boolean;
  showSpot6: boolean;
  showSpot7: boolean;
  // spotsSliderClass: boolean;
  sliderOne: any;
  viewType: string;
  spotsSliderClass = false;

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  constructor(private route: Router) {

    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: []
    };
  }

  slideOptions = {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    }
  };

  ngOnInit() {
  }
  filter() {
    this.route.navigate(['./filter']);
  }
  chargeSpotInfo() {
    this.route.navigate(['./charge-spot-info']);
  }

  reset() {
    this.showSpot1 = false;
    this.showSpot2 = false;
    this.showSpot3 = false;
    this.showSpot4 = false;
    this.showSpot5 = false;
    this.showSpot6 = false;
    this.showSpot7 = false;
    this.spotsSliderClass = false;
  }



  showSpotToggle1() {
    this.reset();
    this.showSpot1 = !this.showSpot1;
    this.spotsSliderClass = !this.spotsSliderClass;
  }
  showSpotToggle2() {
    this.reset();
    this.showSpot2 = !this.showSpot2;
    this.spotsSliderClass = !this.spotsSliderClass;
  }
  showSpotToggle3() {
    this.reset();
    this.showSpot3 = !this.showSpot3;
    this.spotsSliderClass = !this.spotsSliderClass;
  }
  showSpotToggle4() {
    this.reset();
    this.showSpot4 = !this.showSpot4;
    this.spotsSliderClass = !this.spotsSliderClass;
  }
  showSpotToggle5() {
    this.reset();
    this.showSpot5 = !this.showSpot5;
    this.spotsSliderClass = !this.spotsSliderClass;
  }
  showSpotToggle6() {
    this.reset();
    this.showSpot6 = !this.showSpot6;
    this.spotsSliderClass = !this.spotsSliderClass;
  }
  showSpotToggle7() {
    this.reset();
    this.showSpot7 = !this.showSpot7;
    this.spotsSliderClass = !this.spotsSliderClass;
  }
  closedSpotsSlider() {
    this.spotsSliderClass = !this.spotsSliderClass;
  }

  addTofavorite() {
    this.spotsSliderClass = !this.spotsSliderClass;
  }

}
