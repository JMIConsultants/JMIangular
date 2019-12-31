import { Component, OnInit } from '@angular/core';
import { serviceBlurbs } from '../../data/blurbs';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras
} from '@angular/router';

@Component({
  selector: 'app-blurbs',
  templateUrl: './blurbs.component.html',
  styleUrls: ['./blurbs.component.css']
})
export class BlurbsComponent implements OnInit {
  blurbs = serviceBlurbs;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToService(hash) {
    let navigationExtras: NavigationExtras = {
      fragment: hash
    };

    this.router.navigate(['/services'], navigationExtras)
  }

}
