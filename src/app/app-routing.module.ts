import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { ZtruckingComponent } from './core/pages/ztrucking/ztrucking.component';
import { AboutusComponent } from './core/pages/aboutus/aboutus.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "ztrucking",
    component: ZtruckingComponent
  },
  {
    path: "aboutus",
    component: AboutusComponent
  },
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
