export class userSignUpSearchModel{
  "userName": string
      "email": string
      "password": string
      "userPhoto": string
      "gender": string
}

export class UserSignUpViewModel{
    "status":string
    "data": {
      "token": string,
      "userName": string
    }
}
