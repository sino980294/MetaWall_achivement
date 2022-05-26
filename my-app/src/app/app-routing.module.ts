import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatAccountComponent } from './creat-account/creat-account.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'creatAccount', component: CreatAccountComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
