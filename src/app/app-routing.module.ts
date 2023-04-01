import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuntionComponent } from './funtion/funtion.component';
import { LoginComponent } from './login/login.component';
import { VigilanteDobleGuard } from './vigilante-doble.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LoginComponent},
  { path: 'funtion', component: FuntionComponent, canActivate: [VigilanteDobleGuard]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
