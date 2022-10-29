import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia-laboral/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia-laboral/new-experiencia.component';
import { EditHabilidadComponent } from './components/habilidades/edit-habilidad.component';
import { NewHabilidadComponent } from './components/habilidades/new-habilidad.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
//Routing, formato de JSON
const routes: Routes = [
{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'ExperienciaLaboral/crear',component:NewExperienciaComponent},
{path:'ExperienciaLaboral/update/:id',component:EditExperienciaComponent},
{path:'MiPersona/:id',component:EditAcercaDeComponent},
{path:'Educacion/crear',component:NewEducacionComponent},
{path:'Educacion/update/:id',component:EditEducacionComponent},
{path:'Habilidades/crear',component:NewHabilidadComponent},
{path:'Habilidades/update/:id',component:EditHabilidadComponent},
{path:'Proyectos/crear',component:NewProyectoComponent},
{path:'Proyectos/update/:id',component:EditProyectoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
