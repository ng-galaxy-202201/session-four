import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailFormatDirective } from './validators/email-format.directive';
import { InputFileComponent } from './components/input-file/input-file.component';



@NgModule({
  declarations: [
    EmailFormatDirective,
    InputFileComponent
  ],
  exports: [
    EmailFormatDirective,
    InputFileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppFormsModule { }
