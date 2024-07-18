import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { registrationFormConfig } from './constants/register-form.contant';
import { IForm } from './interfaces/form.interface';
import { loginFormConfig } from './constants/login-form.contant';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'userAuthentication';
  showRegisterForm: boolean = true;
  registerForm = registrationFormConfig as IForm;
  loginForm = loginFormConfig as IForm;
  
  toggleForm() {
    this.showRegisterForm = !this.showRegisterForm;
  }
}
