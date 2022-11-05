import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AppFormsModule } from './shared/forms/forms.module';
import { StudentNewComponent } from './pages/student-new/student-new.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
