import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { AppValidators } from './validators';

@Directive({
  selector: '[appEmailFormat]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailFormatDirective,
      multi: true
    }
  ]
})
export class EmailFormatDirective implements Validator {

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    // if (control.errors) return null;
    return AppValidators.emailFormat(control);
  }
}
