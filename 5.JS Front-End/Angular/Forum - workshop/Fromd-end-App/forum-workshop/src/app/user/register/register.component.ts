import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { samePasswordValidarot } from 'src/app/shared/validators/same-passwords-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', Validators.required],
    email: ['',[ Validators.required, appEmailValidator(EMAIL_DOMAINS)]],
    ext: [''],
    tel: [''],
    pass: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        rePassword: [''],
      },
      {
        validators: [samePasswordValidarot('password', 'rePassword')],
      }
    ),
  });

  constructor(private fb: FormBuilder) {}
}
