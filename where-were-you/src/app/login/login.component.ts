import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MustMatch } from '../customvalidator.validator';
import { User } from './user';
import { LoginModel } from './loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerStatus:any;
  loginStatus:any;
  data:any;
  signupmessage:any;
  loginmessage:any;
  confirmpassword:any;
  user = new User();
  login =  new LoginModel();
  registerForm: FormGroup;
  loginForm: FormGroup;
  submitted = false;

// user: User[];
// addedUser: User = {firstname: null, lastname: null, address: null, city: null, state: null,
//   zipcode: null, email: null, password: null}

angForm: FormGroup;
constructor(
  private formBuilder: FormBuilder,
  private formBuilder2: FormBuilder,
  private dataService: ApiService,
  private router:Router
) {
}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            address: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zipcode: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmpassword: ['', Validators.required],
        },
        {
            validator: MustMatch('password', 'confirmpassword')
                }
      );
      this.loginForm = this.formBuilder2.group({
        loginemail: ['', Validators.required],
        loginpassword: ['', Validators.required],
      });


  }

  loginData(){
    this.login.email = this.loginForm.get('loginemail').value;
    this.login.password = this.loginForm.get('loginpassword').value;
    this.dataService.loginUser(this.login).subscribe(res=>{
      this.data = res;
      this.loginStatus = this.data.success;
      this.loginmessage = this.data.message;
      if(this.loginStatus == 1){
        this.loginForm.reset();
        this.router.navigate(['/account']);
      }
    });
  }


  get f() { return this.registerForm.controls; }

  insertUserData(){
    this.submitted = true;

     if(this.registerForm.invalid){
       console.log("invalid");
     }

    else{
      this.user.firstname = this.registerForm.get('firstname').value;
      this.user.lastname = this.registerForm.get('lastname').value;
      this.user.address = this.registerForm.get('address').value;
      this.user.city = this.registerForm.get('city').value;
      this.user.state = this.registerForm.get('state').value;
      this.user.zipcode = this.registerForm.get('zipcode').value;
      this.user.email = this.registerForm.get('email').value;
      this.user.password= this.registerForm.get('password').value;

     this.dataService.insertUser(this.user).subscribe(res=>{
     this.data = res;
     this.registerStatus = this.data.success;
     this.signupmessage = this.data.message;
     // This reset the form after registraion.
     if(this.registerStatus == 1){
       this.registerForm.reset();
       this.submitted = false;
     }
   }
 );

  }
}
}
