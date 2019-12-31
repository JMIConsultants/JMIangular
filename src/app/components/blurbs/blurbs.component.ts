import { Component, OnInit } from '@angular/core';
import { serviceBlurbs } from '../../data/blurbs'

@Component({
  selector: 'app-blurbs',
  templateUrl: './blurbs.component.html',
  styleUrls: ['./blurbs.component.css']
})
export class BlurbsComponent implements OnInit {
  blurbs = serviceBlurbs;


  constructor() { }

  ngOnInit() {
    console.log(this.blurbs[0]['icon'])
  }

  goToService(id: number) {
    console.log(id)
  }

}
