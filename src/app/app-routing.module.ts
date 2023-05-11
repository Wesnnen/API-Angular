import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { ColunaComponent } from './coluna/coluna.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path:'inicio', component: ColunaComponent},
{path:'login', component: LoginComponent},
{path:'', redirectTo:'/inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
