import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

export const routes: Routes = [
    { path: 'home', component: HomePageComponent},
    { path: 'register', component: DynamicFormComponent, data: { formType: 'register' } },
    { path: 'login', component: DynamicFormComponent, data: { formType: 'login' } },
];
