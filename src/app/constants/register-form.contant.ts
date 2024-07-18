import { IForm } from "../interfaces/form.interface";

export const registrationFormConfig: IForm = {
    formTitle: "Registration Form",
    saveBtnTitle: "Register",
    resetBtnTitle: "Reset",
    userBtnTitle: "Login",
    formControls: [
        {
            "name": "name",
            "label": "Name",
            "value": "",
            "placeholder": "",
            "class": "col-md-6",
            "type": "text",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*Name is required"
                },
                {
                    "validatorName": "minLength",
                    "minLength": 5,
                    "message": "Name should be minimum 5 letters"
                }
            ]
        },
        {
            "name": "email",
            "label": "Email",
            "value": "",
            "placeholder": "",
            "class": "col-md-6",
            "type": "email",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*Email is required"
                },
                {
                    "validatorName": "email",
                    "email": "email",
                    "message": "Email is not valid"
                }
            ]
        },
        {
            "name": "password",
            "label": "Password",
            "value": "",
            "placeholder": "",
            "class": "col-md-6",
            "type": "text",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*Password is required"
                },
                {
                    "validatorName": "minlength",
                    "minLength": 8,
                    "message": "Password should be minimum 8 letters"
                }
            ]
        },
        {
            "name": "photo",
            "label": "Photo Upload",
            "value": "",
            "placeholder": "",
            "class": "col-md-6",
            "type": "file",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*Photo is required"
                },
                {
                    "validatorName": "fileType",
                    // "fileType": ["image/jpeg", "image/png"],
                    "message": "Only JPEG and PNG formats are allowed"
                }
            ]
        }
    ]
}