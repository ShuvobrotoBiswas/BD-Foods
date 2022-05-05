import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContractComponent } from './pages/contract/contract.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'menu' , component:MenuComponent},
  {path: 'about' , component:AboutComponent},
  {path: 'contract' , component:ContractComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
