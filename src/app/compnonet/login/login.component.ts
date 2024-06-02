import { Component,TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  modalRef: BsModalRef;
  loginForm:FormGroup
  constructor(private modalService: BsModalService) {}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'name':new FormControl(null,[Validators.required,Validators.pattern(/^[a-z]{3,9}$/)]),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]{3,9}$/)]),
      'rePassword':new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]{3,9}$/)]),
      'phone':new FormControl(null,[Validators.required])
    })  
  }
  onSubmit(loginForm:FormGroup){
    console.log(this.loginForm);
  }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  

}
