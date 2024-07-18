export interface IForm{
    formTitle: string
    formControls: IFormControl[]
    saveBtnTitle?: string
    resetBtnTitle?: string
    userBtnTitle?: string
}

export interface IFormControl{
    name: string
    label: string
    value: string
    type: string
    placeholder?: string
    class?: string
    validators?: IValidator[]
}

export interface IValidator{
    validatorName?: string
    required?: boolean
    message?: string
    pattern?: string
    minLength?: number
    maxLength?: number
    email?: string
    // fileType?: string
}