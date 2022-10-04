import { FormGroup } from '@angular/forms';
export function usuarioSenhaIguaisValidator(formGroup: FormGroup) {
  const userName = formGroup.get('userName')?.value ?? '';
  //caso o código antes da primeira interrogação seja undefined, as duas interrogações irão fazer essa validação

  const password = formGroup.get('password')?.value ?? '';
  if((userName.trim() + password.trim()) && userName === password){
    return { senhaIgualUsuario: true };
  }
  return null


}
