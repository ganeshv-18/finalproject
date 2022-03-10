import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../../app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  Email = "";
  password = "";

  btnDisabled = false;

  constructor(private formbuilder:FormBuilder,
    private router:Router,public userService: UserService,private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({

      Email:[''],
      password:['']

    });
  }

  login(){
    this.userService.getUsers().subscribe(res => {
      const user=res.find((a:any)=> {
        return a.Email=== this.form.value.Email && a.password === this.form.value.password
      });

      if(user){
        alert("Login Success");
        this.form.reset;
        this.router.navigateByUrl('/');
      }else{
        alert("User Not Found");
      }
    },err=>{
      alert("Something went wrong!!");
    })
  }

}
