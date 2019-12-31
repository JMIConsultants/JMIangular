import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { BlurbsComponent } from './components/blurbs/blurbs.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  // { path: 'contact-us',      component: ContactUsComponent },
  { path: 'services', component: BlurbsComponent },
  { path: 'who-we-are', component: WhoWeAreComponent },
  { path: 'contact-us', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
