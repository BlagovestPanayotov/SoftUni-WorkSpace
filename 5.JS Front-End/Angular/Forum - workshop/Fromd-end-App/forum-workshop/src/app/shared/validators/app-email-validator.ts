import { ValidatorFn } from '@angular/forms';

export function appEmailValidator(domains: string[]): ValidatorFn {
  const domainsString = domains.join('|');
  const regExp = new RegExp(`^[^@]{6,}@gmail\.(${domainsString})$`);

  return (control) => {
    return regExp.test(control.value) ? null : { appEmailValidator: true };
  };
}
