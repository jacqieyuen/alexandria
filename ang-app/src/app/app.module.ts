import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { SuccessComponent } from './success/success.component';
import { InputUsernameComponent } from './input-username/input-username.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    SuccessComponent,
    InputUsernameComponent,
    DisplayDetailsComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
