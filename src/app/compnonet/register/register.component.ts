import { Component,OnInit,TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {
  modalRef: BsModalRef;
  registerForm: FormGroup
  constructor(private modalService: BsModalService ) {}
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'name':new FormControl(null,[Validators.required,Validators.pattern(/^[a-z]{3,9}$/)]),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]{3,9}$/)]),
      'rePassword':new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]{3,9}$/)]),
      'phone':new FormControl(null,[Validators.required])
    })  
  }
  onSubmit(registerForm:FormGroup){
    console.log(this.registerForm.value);
   
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
