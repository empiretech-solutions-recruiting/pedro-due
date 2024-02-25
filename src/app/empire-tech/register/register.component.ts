import {Component, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {SharedModule} from "primeng/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CollaboratorService} from "../collaborator.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
    imports: [
        ButtonModule,
        CardModule,
        InputTextModule,
        SharedModule
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  form: FormGroup = this.fb.group({})

  constructor(
    private fb: FormBuilder,
    private service: CollaboratorService,
    private router: Router
  ) {
  }
//campos do formulário e validações
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['',
        [
          Validators.required,
          Validators.minLength(2),

        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: ['',
        [
          Validators.required,
        ]
      ],
      confirmPassword: ['',
        [
          Validators.required,
        ]
      ],
    })
  }

  //register new collaborator
  register(){

    const collaborator = {
      name: this.form.value.name,
      cpf: this.form.value.cpf,
      email:this.form.value.email,
      password: this.form.value.password,
    }

    if(this.form.status !== 'INVALID') {
      this.service.create(collaborator).subscribe((res)=> {
        console.log(res)
        if(!res.hasOwnProperty('error')){
          console.log('collaborator registed')
          this.redirectToListing()
        } else {
          console.log('operation failed')
        }
        console.log(this.form.value)
      })
    }
  }

  redirectToListing(){
    this.router.navigate(['listing'])
  }

}
