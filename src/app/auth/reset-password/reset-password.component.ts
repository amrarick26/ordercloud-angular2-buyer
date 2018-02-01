import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  //TODO: This is a placeholder component for the reset password flow
  //It should take in route parameters for Email Address & Verification Code OR Token
  //Only show the New Password / Confirm Password
  //Use ResetPasswordByVerificationCode if Verification Code is used or if there's only a token use ResetPasswordByToken
  constructor() { }

  ngOnInit() {
  }

}
