import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataArr:any;
  user = new User();
// user: User[];
// addedUser: User = {firstname: null, lastname: null, address: null, city: null, state: null,
//   zipcode: null, email: null, password: null}

angForm: FormGroup;
constructor(private fb: FormBuilder,
  private dataService: ApiService,
  private router:Router
) {
//   this.angForm = this.fb.group({
// firstname: ['', Validators.required],
// lastname: ['', Validators.required],
// address: ['', Validators.required],
// city: ['', Validators.required],
// state: ['', Validators.required],
// zip: ['', Validators.required],
// email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
// password: ['', Validators.required],
// repassword: ['', Validators.required],
// });
}
  ngOnInit(): void {
    //this.getUserData();
  }
  // create(form){
  //
  //       this.dataService.createUser(form.value).subscribe((user: User)=>{
  //         console.log("Policy created, ", user);
  //       });
  //     }


  // postdata(angForm1)
  // {
  // this.dataService.userregistration(angForm1.value.firstname,angForm1.value.lastname,angForm1.value.address,
  //   angForm1.value.city,angForm1.value.state,angForm1.value.zip, angForm1.value.email ,angForm1.value.password)
  // .pipe(first())
  // .subscribe(
  // data => {
  // this.router.navigate(['/friends']);
  // },
  //
  // error => {
  // });
  // }
  // get First() { return this.angForm.get('firstname'); }
  // get Last() { return this.angForm.get('lastname'); }
  // get Addr() { return this.angForm.get('address'); }
  // get City() { return this.angForm.get('city'); }
  // get State() { return this.angForm.get('state'); }
  // get Zip() { return this.angForm.get('zip'); }
  // get Email() { return this.angForm.get('email'); }
  // get Pass() { return this.angForm.get('password'); }

  getUserData(){
    this.dataService.getUser().subscribe(res=>{console.log(res);});
  }

  insertUserData(){
  console.log(this.user);
  this.dataService.insertUser(this.user).subscribe(res=>{console.log(res);});
  }
}
