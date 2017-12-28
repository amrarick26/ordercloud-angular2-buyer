import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderCloudSDK } from '../common/services/ordercloud-sdk/ordercloud-sdk.service';
import { Login } from '../login/login.model';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
    constructor(private formBuilder: FormBuilder, private OrderCloudSDK: OrderCloudSDK, private Router: Router) {}

    loginForm: FormGroup;

    ngOnInit() {
        this.loginForm = this.formBuilder.group( {
            Username: ['', [Validators.required]],
            Password: ['', [Validators.required]]
        } );
    }

    login({ value, valid }: { value: Login, valid: boolean }) {
        return this.OrderCloudSDK.Auth.Login(value.Username, value.Password, '9C743BD5-1895-4FF0-983E-A8E3414E9C1A' , 'FullAccess')
            .subscribe( res => {
                this.OrderCloudSDK.SetToken( res.access_token );
                let link = ['/productBrowse'];
                this.Router.navigate(link);
            } );
    }
}
