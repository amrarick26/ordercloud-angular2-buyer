import {
    DynamicFormControlModel,
    DynamicInputModel,
    DynamicFormLayout
} from "@ng-dynamic-forms/core";

export const FORGOT_PASSWORD_MODEL: DynamicFormControlModel[] = [

    new DynamicInputModel({
        id: "email",
        label: "Email Address",
        autoFocus: true,
        placeholder: "Email Address",
        autoComplete: "off",
        hint: "The email address associated with your account.",
        inputType: "email",
        validators: {
        },
    }),

    new DynamicInputModel({
        id: "submit",
        label: null,
        inputType: 'submit',
        value: "Send Reset Password Link",
    }),
];

export const FORGOT_PASSWORD_LAYOUT : DynamicFormLayout = {
    "email": {
        element: {
            label: "sr-only"
        }
    },

    "submit": {
        element: {
            control: "btn btn-primary"
        }
    }
};