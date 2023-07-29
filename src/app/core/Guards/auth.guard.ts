import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard {
  constructor( private router: Router , private auth: AuthService ) { }

  canActivate() {
    if (this.auth.isuserLogged) {
      return true;
    }
    else {
      alert("You Should Log In !!")
      this.router.navigate(['/login']);
      return false;

    }


  }
}


