import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";

import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {SharedModule} from "primeng/api";
// import {CollaboratorService} from "../collaborator.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    SharedModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  form: FormGroup = this.fb.group({})

  // collaborator: any
  // collaboratorId: any

  constructor(
    private fb: FormBuilder,
    private router: Router,
    // private service: CollaboratorService,
    // private activatedRoute: ActivatedRoute
  ) {
  }

//campos do formulário/validação dos campos
//se URL trouxer id de usuário existente, preenche os campos do form com os dados do usuário
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
          Validators.minLength(4)
        ]
      ],
      confirmPassword: ['',
        [
          Validators.required,
        ]
      ],
    })
  /*
    this.activatedRoute.params.subscribe((params: any) => {
      this.collaboratorId = params?.id;
      if (this.collaboratorId) {
        this.service.checkId(this.collaboratorId).subscribe((collaborator: any) => {
          this.collaborator = collaborator
          if (collaborator) {
            const {name, email, password} = collaborator
            this.form.controls['name'].setValue(name)
            this.form.controls['email'].setValue(email)
            this.form.controls['password'].setValue(password)
          }
        })
      }
    })
    */
  }

  //verifica se é para editar colaborador existente ou cadastrar um novo
  register() {

    const collaborator = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password,
      confirmPassword: this.form.value.confirmPassword
    }

  if(this.form.value.password !== this.form.value.confirmPassword) {
     this.form.invalid
  }
    if (this.form.status !== 'INVALID' || this.form.invalid) {

      /* confere se url possui id de colaborador cadastrado. Se trouxer,
       irá edita-lo, do contrario irá criar um novo colaborador

      if (this.collaboratorId) {
        this.service.update(collaborator).subscribe((res) => {
          console.log(res)
          if (!res.hasOwnProperty('error')) {
            console.log('Colaborador cadastrado com sucesso')
            this.redirectToListing()
          } else {
            console.log('Erro ao editar dados do colaborador')
          }
        })
      } else {
        this.service.create(collaborator).subscribe((res) => {
          console.log(res)
          if (!res.hasOwnProperty('error')) {
            console.log('Colaborador cadastrado com sucesso')
            this.redirectToListing()
          } else {
            console.log('Falha no cadastro')
          }
          console.log(this.form.value)
        })
      }
      */
      console.log('colaborador cadastrado com sucesso')
      this.redirectToListing()
    } else {
      console.log('Não foi possível cadastrar colaborador, verifique se há campos inválidos')
      console.log(collaborator)
    }
  }

  redirectToListing() {
    this.router.navigate(['listing'])
  }

}
