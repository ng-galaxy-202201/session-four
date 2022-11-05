## Generar directiva

- Angular Schematics (generate directive)
- `ng g directive nombre-directiva`

## Configurar directiva para validacion de formulario de template

- Agregar a la directiva el metadato `providers`
  - cambiar `useExisting` con el nombre de la clase creada
- Implementar la interfaz `Validator`
  - En el metodo validate returnar `null` si cumple la validacion
  - retornar `{ nombreValidacion: informacionUtil }` si incumple la regla

```
import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

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

    const value = control.value || '';
    const isValid = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(value)

    return isValid ? null : { emailFormat: 'Por favor ingrese el siguiente formato username@domain.com' }
  }
}

```
