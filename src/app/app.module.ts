import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { SearchDisplayComponent } from './search-display/search-display.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PlayListDisplayComponent } from './play-list-display/play-list-display.component';
import { TrackDisplayComponent } from './track-display/track-display.component';
import { SortPipePipe } from './sort-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    SearchComponent,
    SearchDisplayComponent,
    LoginComponent,
    RegisterComponent,
    PlayListDisplayComponent,
    TrackDisplayComponent,
    SortPipePipe
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
