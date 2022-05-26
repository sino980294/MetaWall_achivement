import { Component, OnInit } from '@angular/core';
import { Users_Service } from '../app-info/typescript-angular-client-generated/typescript-angular-client/api/users_.service';
import { UserSignUpViewModel } from '../app-info/typescript-angular-client-generated/typescript-angular-client/model/models';

@Component({
  selector: 'app-creat-account',
  templateUrl: './creat-account.component.html',
  styleUrls: ['./creat-account.component.scss']
})
export class CreatAccountComponent implements OnInit {

  constructor(private userService: Users_Service) { }

  ngOnInit(): void {
  }
  public account: string = "miaan-@mail.com";
  public password: string = "12345678";

  createAccount(){
    console.log(this.account)
    this.userService.usersSignUpPost({
      "userName": "小明",
      "email": this.account,
      "password": this.password,
      "userPhoto": "https://avatars.githubusercontent.com/u/42748910?v=4",
      "gender": "male"
    }).subscribe({
      next:(res:UserSignUpViewModel)=>{
console.log(res)
      }
    })
  }

}
