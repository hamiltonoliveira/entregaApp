import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {MatDividerModule} from '@angular/material/divider';
import { HeaderComponent } from './pages/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './pages/login/login.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { EntregadorComponent } from './pages/entregador/entregador.component';

import { WebcamModule } from 'ngx-webcam';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    EntregadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    WebcamModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
