import { Component } from '@angular/core';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {CurrencyPipe} from "@angular/common";
import {CollaboratorService} from "../collaborator.service";

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
    CurrencyPipe
  ],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent {

  collaborators: any[] = []

  constructor(
    private service: CollaboratorService,
  ) { }

  // getCollaborators(){
  //   this.service.read().subscribe((collaboratorsRegisted:any[])=> {
  //     this.
  //   })
  // }

}
