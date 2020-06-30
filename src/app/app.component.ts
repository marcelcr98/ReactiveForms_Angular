
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'angular13';
  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.angForm = this.fb.group({

      email: [''],
      password: ['']


    });
  }

  onClickSubmit(email, password){
    alert('Your Email is : '+email);
    alert('Your Password is : '+password);
  }
  ngOnInit(){
  }

}
