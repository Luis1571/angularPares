import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './core/components/home/home.component';
import { ArchivoComponent } from './modules/components/archivo/archivo.component';



const routes: Routes = [
  {
		path: '',
    component: LoginComponent,
  },  
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'archivos',
    component: ArchivoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
