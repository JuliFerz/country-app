import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutPageComponent,
    HomePageComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
