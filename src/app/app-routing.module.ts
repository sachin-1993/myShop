import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { RightMenuComponent } from './right-menu/right-menu.component';

const routes: Routes = [
  {path:'home',component:HomePageComponent},
  {path:'home',component:LeftMenuComponent,outlet:'left'},
  {path:'home',component:RightMenuComponent,outlet:'right'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
