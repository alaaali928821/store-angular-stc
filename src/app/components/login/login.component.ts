import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {
  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, public authService: AuthService) { }

  ngOnInit() {
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      alert("Please Add Valid Data");
      return;
    }
    this.authService.userName = this.loginForm.value.username;
    this.authService.passWord = this.loginForm.value.password;
    this.authService.Login()
  }
}
