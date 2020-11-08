import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MustMatch } from '../customvalidator.validator';
import { UserReset } from './reset';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  resetForm: FormGroup;
  userReset = new UserReset();
  submitted = false;
  resetStatus: any;
  resetmessage: any;
  data: any;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: ApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],
    },
      {
        validator: MustMatch('password', 'confirmpassword')
      }
    );
  }
  get f() { return this.resetForm.controls; }

  resetPassword(){
    this.submitted = true;

    if (this.resetForm.invalid) {
      console.log("invalid");
    }

    else {
      this.userReset.firstname = this.resetForm.get('firstname').value;
      this.userReset.lastname = this.resetForm.get('lastname').value;
      this.userReset.email = this.resetForm.get('email').value;
      this.userReset.password = this.resetForm.get('password').value;

      this.dataService.resetUser(this.userReset).subscribe(res => {
        this.data = res;
        this.resetStatus = this.data.success;
        this.resetmessage = this.data.message;
        //This reset the form after password reset.
        if (this.resetStatus == 1) {
          this.resetForm.reset();
          this.submitted = false;
          this.router.navigate(['/']);
        }
      }
      );

    }
  }

  cancelReset(){
    console.log("I am here");
    this.resetForm.reset();
    this.router.navigate(['/']);
  }

}
