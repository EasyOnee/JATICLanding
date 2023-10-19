import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { DetailsComponent } from './pages/details/details.component';

// PrimeNG modules
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';


 
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    CustomersComponent,
    PricingComponent,
    TestimonialsComponent,
    NewsletterComponent,
    VideoComponent,
    DescriptionComponent,
    DetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
