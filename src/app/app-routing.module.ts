import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchDisplayComponent } from './search-display/search-display.component';
import { LoginAuthGuardService } from './login-auth-guard.service';
import { PlayListDisplayComponent } from './play-list-display/play-list-display.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TrackDisplayComponent } from './track-display/track-display.component';



const routes: Routes = [
  {path: 'search', component: SearchDisplayComponent, canActivate: [LoginAuthGuardService] },
  {path: 'login', component: LoginComponent},
  {path: 'playlist', component: PlayListDisplayComponent, canActivate: [LoginAuthGuardService]},
  {path: 'register', component: RegisterComponent},
  {path: 'track', component: TrackDisplayComponent, canActivate: [LoginAuthGuardService] },
  {path: '**', redirectTo: 'login'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
