import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  isLoading = false;
  returnUrl: string;
  loginForm = this.fb.group({
    emailAddress: ['', [Validators.required, Validators.email]],
    passwordHash: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private accountService: AccountService, private _snackBar: MatSnackBar, private route: ActivatedRoute,
    private router: Router) {

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  login() {
    this.hide = false;
    this.accountService.login(this.loginForm.value.emailAddress, this.loginForm.value.passwordHash)
      .subscribe(result => {             
        this.router.navigate(['/dashboard'])
      },
        error => {
          this.isLoading = false
          this.hide = true
          this.openSnackBar(error, 'Dismiss');
        })

  }

}
