import { Routes } from '@angular/router';
import { AppComponent } from './app.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'accueil', component: AppComponent },
  { path: '**', redirectTo: '/home' },
];
