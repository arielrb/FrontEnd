import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './components/experiencia-laboral/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia-laboral/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
//Routing, formato de JSON
const routes: Routes = [
{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'nuevaexp',component:NewExperienciaComponent},
{path:'editarexp/:id',component:EditExperienciaComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
