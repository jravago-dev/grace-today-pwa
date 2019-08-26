import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/Account';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  hide = true;
  isLoading = false;
  forVerification = false;
  verificationCode: any;
  verificationMessage: string;
  private sub: any;

  returnUrl: string;
  registrationForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    emailAddress: ['', [Validators.required, Validators.email]],
    passwordHash: ['', [Validators.required]],
    confirmPasswordHash: ['', [Validators.required]]
  })


  constructor(private fb: FormBuilder, private accountService: AccountService, private _snackBar: MatSnackBar, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    let verificationCode = this.route.snapshot.paramMap.get('verificationCode');

    if (verificationCode !== null) {
      this.accountService.activate(verificationCode).subscribe(result => {

        this.forVerification = true
        this.verificationMessage = result.message

        setTimeout(() => {
          this.router.navigate(['/login'])
        }, 3000);

      })
    }

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  register() {
    this.hide = false;
    let accountObject = new Account();

    accountObject.emailAddress = this.registrationForm.value.emailAddress;
    accountObject.userName = this.registrationForm.value.emailAddress;
    accountObject.passwordHash = this.registrationForm.value.passwordHash;

    this.accountService.register(accountObject)
      .subscribe(result => {
        this.forVerification = true;
        this.verificationMessage = result.message;
        this.hide = true;
      }, error => {
        this.isLoading = false;
        this.hide = true;
        this.openSnackBar(error, 'Dismiss')
      })

    /*
    this.accountService.login(this.registrationForm.value.emailAddress, this.registrationForm.value.passwordHash)
      .subscribe(result => {             
        this.router.navigate(['/dashboard'])
      },
        error => {
          this.isLoading = false
          this.hide = true
          this.openSnackBar(error, 'Dismiss');
        })   

    */
  }

}
