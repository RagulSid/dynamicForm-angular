import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IForm, IFormControl, IValidator } from '../interfaces/form.interface';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
  @Input() form!: IForm;
  @Output() toggleForm = new EventEmitter<void>();
  dynamicFormGroup: FormGroup;
  http: any;

  constructor(private fb: FormBuilder) {
    this.dynamicFormGroup = this.fb.group({}, { updateOn: 'submit' });
  }

  ngOnInit(): void {
    if(this.form?.formControls){
      let formGroup: any = {};
      this.form.formControls.forEach((control: IFormControl)=>{
        let controlValidators: any = [];
        if(control.validators){
          control.validators.forEach((val: IValidator)=>{
            if(val.validatorName === 'required') controlValidators.push(Validators.required)
            if(val.validatorName === 'email') controlValidators.push(Validators.email)
            if(val.validatorName === 'pattern') controlValidators.push(Validators.pattern(val.pattern as string))
            if(val.validatorName === 'minlength') controlValidators.push(Validators.minLength(val.minLength as number))
            if(val.validatorName === 'maxlength') controlValidators.push(Validators.maxLength(val.maxLength as number))
            // if(val.validatorName === 'fileType') controlValidators.push(this.fileTypeValidator(val.fileType as string[]))
          })
        }
        formGroup[control.name] = [control.value || '', controlValidators]
      });
      this.dynamicFormGroup = this.fb.group(formGroup);
    }
  }

  onSubmit(btnTxt: any) {
    if (this.dynamicFormGroup.valid) {
      const formData = this.dynamicFormGroup.value;
      let url = '';

      if (btnTxt.toLowerCase() === 'register') {
        url = 'http://localhost:8000/';
      } else if (btnTxt.toLowerCase() === 'login') {
        url = 'http://localhost:8000/login';
      }

      this.http.post(url, formData).subscribe(
        (res: any) => {
          console.log('Response:', res);
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );
    }
  }

  resetForm() {
    this.dynamicFormGroup.pristine;
    this.dynamicFormGroup.reset();
    console.log("hello");
  }

  gotoLogin() {
    this.toggleForm.emit();
  }

  onBlur(controlName: string) {
    const control = this.dynamicFormGroup.get(controlName);
    if (control) {
      control.markAsTouched();
    }
  }

  getValidationErrors(control: IFormControl): any{
    const myFormControl = this.dynamicFormGroup.get(control.name);
    let errorMsg = '';
    control.validators?.forEach((val)=>{
      if(myFormControl?.hasError(val.validatorName as string)){
        errorMsg = val.message as string;
      }
    });
    return errorMsg;
  }
}
