import { IForm } from "../interfaces/form.interface";

export const loginFormConfig: IForm = {
    formTitle: "Login Form",
    saveBtnTitle: "Login",
    resetBtnTitle: "Reset",
    userBtnTitle: "Register",
    formControls: [
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
    ]
}