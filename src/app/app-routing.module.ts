import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: '**', // Cualquier dirección no contemplada redirige al home
    redirectTo: 'home'
  }
]

@NgModule({
  imports: [
    // forRoot hace referencia a que este archivo es la principal dirección de la app.
    // Si se agrega otro root en un componente hijo, sería forChild()
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule // Para linkear con app-module despues
  ]
})
export class AppRoutingModule {

}
