import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const emailFormatValidator = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value || '';
  const isValid = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(value)

  return isValid ? null : { emailFormat: 'Por favor ingrese el siguiente formato username@domain.com' }
}

export class AppValidators {
  static emailFormat(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const isValid = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(value)

    return isValid ? null : { emailFormat: 'Por favor ingrese el siguiente formato username@domain.com' }
  }
  static rangeLength(minLength: number, maxLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value as string || '';
      const isValid = value.length >= minLength && value.length < maxLength;

      return isValid ? null : { rangelength: {
        minLength,
        maxLength,
        length: value.length
      }}
    }
  }
  static compareFields(fieldName1: string, fieldName2: string): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
      const valueOne = form.get(fieldName1)?.value;
      const valueTwo = form.get(fieldName2)?.value;
      const isValid = valueOne === valueTwo
      return isValid ? null : { compareFields: 'Los campos no son iguales' }
    }
  }

  static extension(validExtensions: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const file = control.value as File;
      if (!file) return null;

      const ext = file.name.split('.').at(-1)!;
      const isValid = validExtensions.includes(ext);

      return isValid ? null : { extension: `extensiones validas ${validExtensions.join(', ')}` }
    }
  }
}
