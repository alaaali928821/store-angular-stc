import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userName: string = '';
  passWord: string = '';
  isuserLogged: boolean = false;
  constructor(private router: Router) { }

  Login() {
    if (this.userName == 'admin' && this.passWord == '1234') {
      this.isuserLogged = true;
      this.router.navigate(["/dashboard"]);
    }
    else if (this.userName == 'user' && this.passWord == '1234') {
      this.isuserLogged = true;
      this.router.navigate(["/products"]);

    }
    else {
      alert("Your Are Not A User for this App");
    }
  }
}
