import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurSectionComponent } from './components/our-section/our-section.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { InvestComponent } from './components/invest/invest.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'header',
    component: HeaderComponent
  },

  {
    path: 'invest/:id',
    component: InvestComponent
  },

  {
    path: 'contact-us',
    component: ContactUsComponent
  },

  {
    path: 'our-section',
    component: OurSectionComponent
  },

  {
    path: 'about',
    component: AboutUsComponent
  },

  {
    path: 'footer',
    component: FooterComponent
  },


  {
    path: '**',
    component: NotFoundComponent
  }
];
