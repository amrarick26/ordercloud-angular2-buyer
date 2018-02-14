import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicFormLayout
} from '@ng-dynamic-forms/core';

export const LOGIN_MODEL: DynamicFormControlModel[] = [

    new DynamicInputModel({
        id: 'username',
        label: 'Username',
        maxLength: 42,
        placeholder: 'Username',
        autoFocus: true,
        autoComplete: 'off',
        validators: {
        },
    }),

    new DynamicInputModel({
        id: 'password',
        label: 'Password',
        placeholder: 'Password',
        inputType: 'password',
        autoComplete: 'off',
        validators: {
        },
    }),

    new DynamicCheckboxModel({
        id: 'rememberMe',
        label: 'Remember Me',
    }),

    new DynamicInputModel({
        id: 'submit',
        label: null,
        inputType: 'submit',
        value: 'Submit',
    }),
];

export const LOGIN_LAYOUT: DynamicFormLayout = {

    'username': {
        element: {
            label: 'sr-only'
        }
    },

    'password': {
        element: {
            label: 'sr-only'
        }
    },

    'rememberMe': {
        element: {
            container: 'custom-checkbox',
            control: 'custom-control-input',
            label: 'custom-control-label'
        }
    },

    'submit': {
        element: {
            control: 'btn btn-primary'
        }
    }
};
