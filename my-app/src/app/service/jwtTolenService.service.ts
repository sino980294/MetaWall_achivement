import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenServiceService {

  constructor() { }
  getAccessToken() {
    return localStorage.getItem("token");
  }
}
