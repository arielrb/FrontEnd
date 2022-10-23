import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia-laboral/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia-laboral/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
//Routing, formato de JSON
const routes: Routes = [
{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'nuevaexp',component:NewExperienciaComponent},
{path:'editarexp/:id',component:EditExperienciaComponent},
{path:'MiPersona/:id',component:EditAcercaDeComponent},
{path:'nuevaedu',component:NewEducacionComponent},
{path:'editaredu/:id',component:EditEducacionComponent},
{path:'nuevoproyecto',component:NewProyectoComponent},
{path:'editarproyecto/:id',component:EditProyectoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
