import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { SearchDisplayComponent } from './search-display/search-display.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PlayListDisplayComponent } from './play-list-display/play-list-display.component';
import { TrackDisplayComponent } from './track-display/track-display.component';
import { SortPipePipe } from './sort-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { MatTableModule, MatButtonModule, MatSortModule, MatFormFieldModule, MatIconModule, MatSnackBarModule, MatBottomSheetModule, MatDialogModule } from '@angular/material';

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
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
