import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from '../shared/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userdata:UserdataService, private router:Router) { }

  loginForm= new FormGroup({
    'username' : new FormControl('')
  })

  ngOnInit(): void {
    if(this.userdata.getData()!=null)
    {
      this.router.navigateByUrl('layout/dashboard')
    }
  }

  onclick(){
    if (this.loginForm.get('username')?.value == "malaika")
    {
      this.userdata.setData(this.loginForm.value)
      this.router.navigateByUrl('layout/dashboard')
    }
    else{
      alert('incorrect or invalid username')
    }
  }

}
