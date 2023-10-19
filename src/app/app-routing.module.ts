import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './pages/layout/header/header.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { NavComponent } from './pages/layout/nav/nav.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { VideoComponent } from './pages/video/video.component';
import { DescriptionComponent } from './pages/description/description.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'nav', component: NavComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'description', component: DescriptionComponent },
  { path: 'video', component: VideoComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
