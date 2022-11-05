import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { StudentNewComponent } from './pages/student-new/student-new.component';

const routes: Routes = [
  { path: '', redirectTo: 'student-new', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'student-new', component: StudentNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
