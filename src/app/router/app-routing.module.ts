import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { StatsComponent } from '../components/stats/stats.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { UnlockComponent } from '../components/unlock/unlock.component';
import { ProfileComponent } from '../components/profile/profile.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'porfolio', component: PortfolioComponent },
  { path: 'unlock', component: UnlockComponent },
  { path: 'profile', component: ProfileComponent }

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}