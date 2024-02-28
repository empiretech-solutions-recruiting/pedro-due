import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CurrencyPipe, NgIf} from "@angular/common";
import {Router} from "@angular/router";

//import {CollaboratorService} from "../collaborator.service";
// import {ConfirmationService, MessageService} from "primeng/api";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    CurrencyPipe,
    ConfirmDialogModule,
    CardModule,
    NgIf
  ],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent implements OnInit {

  listCollaborator: any[] = [];

  constructor(
    private router: Router,
    // private service: CollaboratorService,
    // private service: CollaboratorService,
    // private confirmService: ConfirmationService,
  ) { }


  ngOnInit(): void {
    this.getCollaborators()
  }
  getCollaborators(){
    /*
    this.service.read().subscribe((collaboratorsRegisted:any[])=> {
      this.listCollaborator = collaboratorsRegisted
    })
     */
  }

  newCollaborator() {
    this.router.navigate(['register'])
  }

  update(id: string) {
    this.router.navigate([`register/${id}`])
  }

  delete(id: any) {
    /* deleta usuário por id:
    this.confirmService.confirm({
      message: 'Deseja remover colaborador?',
      accept: () => {
        this.service.delete(id).subscribe(() => {
          console.log('Colaborador removido')
          this.getCollaborators()
        })
      },
      reject: () => {
        return this.getCollaborators()
      }
    })
    */
  }
}
