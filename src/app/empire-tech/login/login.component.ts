import {Component, OnInit} from '@angular/core';

import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {InputGroupModule} from "primeng/inputgroup";
import {InputTextModule} from "primeng/inputtext";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    InputGroupModule,
    InputTextModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.fb.group({})

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
  }
//validacao dos campos
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
    if(this.form.status == 'VALID') {

      this.router.navigate(['listing'])
    } else {
      console.log('login inválido')
    }
  }
}
