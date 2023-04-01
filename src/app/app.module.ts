import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuntionComponent } from './funtion/funtion.component';
import { LoginComponent } from './login/login.component';
import { DropdownModule } from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';

import { RadioButtonModule } from 'primeng/radiobutton';
import { MessageErrorComponent } from './message-error/message-error.component';


@NgModule({
  declarations: [
    AppComponent,
    FuntionComponent,
    LoginComponent,
    MessageErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    ToastModule,
    MessagesModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
