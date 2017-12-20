import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OrderCloudSDK } from '../common/services/ordercloud-sdk/ordercloud-sdk.service'; 

@Component( {
    selector: 'login-form',
    templateUrl: '../login/login-form.component.html'
} )

export class LoginFormComponent implements OnInit {
    constructor(private formBuilder: FormBuilder) {}

    loginForm: FormGroup;

    ngOnInit() {
        this.loginForm = this.formBuilder.group( {
            username: '',
            password: ''
        } );
    }
}