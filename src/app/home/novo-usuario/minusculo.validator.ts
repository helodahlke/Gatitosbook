import { AbstractControl } from '@angular/forms';
export function minusculoValidator(control: AbstractControl): Boolean{
  const valor = control.value as string;
  if(valor !== valor.toLowerCase()) return true
  return false
}
