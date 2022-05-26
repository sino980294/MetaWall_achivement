import { Users_Service } from './../app-info/typescript-angular-client-generated/typescript-angular-client/api/users_.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: Users_Service) { }
public errorMessage:string = "";
  ngOnInit() {
  }
  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  })
  onSubmit(){
    console.log(this.loginForm.value)
this.userService.usersLoginPost(this.loginForm.value).subscribe({
  next:(res)=>{
console.log(res)
  },
  error:(error)=>{
    this.errorMessage = error.error.message
    console.log(error.error.message)
  }
})
  }
}
