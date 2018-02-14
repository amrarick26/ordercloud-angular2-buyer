// angular
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';

// 3rd party
import { DynamicFormControlModel, DynamicFormLayout, DynamicFormService } from '@ng-dynamic-forms/core';

// ordercloud
import { APP_CONFIG, AppConfig } from '../../config/app.config';

// register form
import { REGISTER_MODEL, REGISTER_LAYOUT } from './register.constants';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formModel: DynamicFormControlModel[] = REGISTER_MODEL;
  formLayout: DynamicFormLayout = REGISTER_LAYOUT;
  formGroup: FormGroup;

  constructor(
    private formService: DynamicFormService,
    @Inject(APP_CONFIG) private appConfig: AppConfig) {

    }

  ngOnInit() {
      this.formGroup = this.formService.createFormGroup(this.formModel);
  }

  onSubmit() {
    console.log(this.appConfig);
    //TODO: Register the user and log them in
    //We may want to implement the whole verify email thing if that exists in the API, it may only be for dev center.
  }

}
