import {Component, OnInit} from '@angular/core';

import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {InputGroupModule} from "primeng/inputgroup";
import {InputTextModule} from "primeng/inputtext";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CollaboratorService} from "../collaborator.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    InputGroupModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.fb.group({})

  constructor(
    private fb: FormBuilder,
    private router: Router,
    // private service: CollaboratorService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ],
    })
  }

  login() {

    const collaborator = {
      email: this.form.value.email,
      password: this.form.value.password
    }
    /*Consultando usuário no banco:
    if(this.form.status !== 'INVALID'){
      this.service.create(collaborator).subscribe((res)=>{
        console.log(res)
        if(!res.hasOwnProperty('error')) {
          console.log('Usuário logado')
          console.log(collaborator)
        }
      })
    }else {
       console.log('Erro no login, usuário não cadastrado')
       console.log(collaborator)
      }
    */

    if(this.form.status !== 'INVALID') {
      console.log(collaborator)
      console.log(this.form.status)
      this.redirectToListing()
    } else {
      console.log('login inválido, revise os campos ou cadastre-se')
      console.log(collaborator)
      console.log('STATUS FORM: ' + this.form.status)
    }
  }

  redirectToListing(){
    this.router.navigate(['listing'])
  }

  redirectToRegister(){
    this.router.navigate(['register'])
  }
}
