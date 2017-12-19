import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OrderCloudSDK } from '../common/services/ordercloud-sdk/ordercloud-sdk.service'; 

@Component( {
    selector: 'login-form',
    templateUrl: '../login/login-form.component.html'
} )

export class LoginFormComponent implements OnInit {
    constructor(private OrderCloudSDK: OrderCloudSDK) {}

    loginForm: FormControl;
    // username: FormControl;
    // password: FormControl;

    ngOnInit() {
        this.loginForm = new FormControl('login');

        // this.loginForm = new FormGroup({
        //     username: new FormControl(),
        //     password: new FormControl()
        // })
    }
}