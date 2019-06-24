import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatsComponent } from './components/stats/stats.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { UnlockComponent } from './components/unlock/unlock.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AppRoutingModule } from './router/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatsComponent,
    PortfolioComponent,
    UnlockComponent,
    ProfileComponent,
    HeaderNavComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
