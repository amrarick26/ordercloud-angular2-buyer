import { Injectable } from '@angular/core';
import { ValidationMessages, InterpolationParams } from './oc-auto-validate.models';
import { FormGroup } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';
import { merge } from 'rxjs/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import * as _ from 'lodash';

@Injectable()
export class OcAutoValidate {

  constructor() { }

  private validationMessages: ValidationMessages = {
    defaultMsg: 'Please add error message for {0}',
    email: 'Please enter a valid email address',
    minlength: 'Please enter at least {0} characters',
    maxlength: 'You have entered more than the maximum {0} characters',
    min: 'Please enter the minimum number of {0}',
    max: 'Please enter the maximum number of {0}',
    required: 'This field is required',
    date: 'Please enter a valid date',
    pattern: 'Please ensure the entered information adheres to this pattern {0}',
    number: 'Please enter a valid number',
    url: 'Please enter a valid URL in the format of http(s)://www.google.com',
    // custom fields
    ocMatchFields: 'Fields do not match' // too generic -use overrides when possible for this one
  };

  HandleValidationMessages(form: FormGroup, formErrorsModel: object, messageOverrides?: ValidationMessages) {
    const formControlNames = this.getAllControls(form);
    const formControls = formControlNames.map(controlName => {
      const control = form.get(controlName);
      if (!control) {
        throw new Error(`Cant find control with name: ${controlName}`);
      }
      return control.valueChanges.map(() => ({ value: control, name: controlName }));
    });
    merge(...formControls).subscribe(control => {
      this.setValidationMessage(control.value, control.name, formErrorsModel, messageOverrides);
    });
  }

  private getAllControls(form: FormGroup) {
    const controls = [];
    getControls('', form);
    return controls;

    function getControls(parentName: string, nestedForm: any) {
      _.each(nestedForm.controls, (control, controlName) => {
        const toAdd = parentName ? `${parentName}.${controlName}` : controlName;
        controls.push(toAdd);
        if (control['controls']) {
          getControls(toAdd, form.get(toAdd));
        }
      });
    }
  }

  private setValidationMessage(
    control: AbstractControl,
    controlName: string, formErrorsModel: object,
    messageOverrides?: ValidationMessages): void {
    formErrorsModel[controlName] = '';

    if ((control.touched || control.dirty) && control.errors) {
      formErrorsModel[controlName] = _.keys(control.errors).map(error => {
        if (this.errorMessageNotDefined(error)) {
          return this.interpolate(this.validationMessages.defaultMsg, { 0: error });
        } else {
          const errorObj = control.errors;
          let params: InterpolationParams;
          switch (error) {
            // handle special scenarios where we need to get more info from error than just type
            case 'minlength':
              params = {
                0: errorObj.minlength.requiredLength,
                1: errorObj.minlength.actualLength
              };
              break;
            case 'maxlength':
              params = {
                0: errorObj.maxlength.requiredLength,
                1: errorObj.maxlength.actualLength
              };
              break;
            case 'min':
              params = {
                0: errorObj.min.min,
                1: errorObj.min.actual
              };
              break;
            case 'max':
              params = {
                0: errorObj.max.max,
                1: errorObj.max.actual
              };
              break;
            case 'pattern':
              params = {
                0: errorObj.pattern.requiredPattern,
                1: errorObj.pattern.actualValue
              };
              break;
            default:
              params = {};
          }
          if (messageOverrides && messageOverrides[error]) {
            return this.interpolate(messageOverrides[error], params);
          } else {
            return this.interpolate(this.validationMessages[error], params);
          }
        }
      }).join(' ');
    }
  }

  private errorMessageNotDefined(error) {
    const validationTypes = _.keys(this.validationMessages);
    return !validationTypes.find(val => val === error);
  }

  private interpolate(message, params: InterpolationParams) {
    return message.replace(/{(\d+)}/g, function (match, number) {
      return typeof params[number] !== 'undefined' ? params[number] : match;
    });
  }
}
