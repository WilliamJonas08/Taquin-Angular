import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeskComponent } from './desk/desk.component';
import { PieceComponent } from './piece/piece.component';
import { EndScreenComponent } from './end-screen/end-screen.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes, Router} from '@angular/router' // ?? Déja appelé dans app-routing (importé et exporté via @NgModule)

import { ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from './pipes/translate.pipe';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DeskComponent,
    PieceComponent,
    EndScreenComponent,
    TranslatePipe,
    LoginScreenComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // Router,//Je le met la au cas ou mais il est déja importé dans app-rooting

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
