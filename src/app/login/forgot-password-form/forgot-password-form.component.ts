import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss']
})
export class ForgotPasswordFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }

  forgotPasswordForm: FormGroup;

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ''
    });
  }

}
