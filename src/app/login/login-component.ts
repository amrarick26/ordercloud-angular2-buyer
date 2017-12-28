import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-login',
    templateUrl: './login-component.html',
    styleUrls: ['./login-component.scss']
})
export class LoginComponent implements OnInit {
    constructor() { }
    form: string;

    ngOnInit() {
        this.setForm('login');
    }

    setForm(form) {
        this.form = form;
    }
}
