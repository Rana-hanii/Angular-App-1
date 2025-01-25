import { AboutComponent } from './about/about.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { TestComponent } from './test/test.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StarsComponent } from './stars/stars.component';
import { NotfoundComponent } from './notfound/notfound.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent,  AboutComponent,  NavbarComponent,  FooterComponent,  PortfolioComponent,  ContactComponent,  StarsComponent , NotfoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bl7';
}
