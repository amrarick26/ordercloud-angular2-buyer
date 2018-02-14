import {
    DynamicFormControlModel,
    DynamicInputModel,
    DynamicFormLayout,
    DynamicFormGroupModel
} from "@ng-dynamic-forms/core";

export const REGISTER_MODEL: DynamicFormControlModel[] = [

    new DynamicFormGroupModel({
        id:'name',
        group: [
            new DynamicInputModel({
                id: "first",
                label: "First Name",
                placeholder: "First Name",
                autoFocus: true,
                autoComplete: "off",
                validators: {
                    required: null
                },
            }),
        
            new DynamicInputModel({
                id: "last",
                label: "Last Name",
                placeholder: "Last Name",
                autoComplete: "off",
                validators: {
                    required: null
                },
            }),
        ]
    }),

    new DynamicInputModel({
        id: "email",
        label: "Email Address",
        placeholder: "Email Address",
        autoComplete: "off",
        hint: "A confirmation link will be sent to this email.",
        inputType: "email",
        errorMessages: {
            email: "Please provide a valid email address.",
        },
        validators: {
            required: null,
            email: null
        },
    }),

    new DynamicInputModel({
        id: "username",
        label: "Username",
        maxLength: 42,
        placeholder: "Username",
        autoComplete: "off",
        validators: {
            required: null
        },
    }),

    new DynamicInputModel({
        id: "password",
        label: "Password",
        placeholder: "Password",
        inputType: "password",
        autoComplete: "off",
        validators: {
            required: null
        },
    }),

    new DynamicInputModel({
        id: "confirmPassword",
        label: "Confirm Password",
        placeholder: "Confirm Password",
        inputType: "password",
        autoComplete: "off",
        validators: {
            required: null
        },
    }),

    new DynamicInputModel({
        id: "submit",
        label: null,
        inputType: 'submit',
        value: "Submit",
    }),
];

export const REGISTER_LAYOUT : DynamicFormLayout = {

    "name": {
        element: {
            control: 'form-row'
        }
    },

    "first": {
        element: {
            label: "sr-only"
        },
        grid: {
            host: 'col-sm-6'
        }
    },
    
    "last": {
        element: {
            label: "sr-only"
        },
        grid: {
            host: 'col-sm-6'
        }
    },
    
    "email": {
        element: {
            label: "sr-only"
        }
    },

    "username": {
        element: {
            label: "sr-only"
        }
    },
    
    "password": {
        element: {
            label: "sr-only"
        }
    },

    "confirmPassword": {
        element: {
            label: "sr-only"
        }
    },

    "rememberMe": {
        element: {
            container: "custom-checkbox",
            control: "custom-control-input",
            label: "custom-control-label"
        }
    },

    "submit": {
        element: {
            control: "btn btn-primary"
        }
    }
};