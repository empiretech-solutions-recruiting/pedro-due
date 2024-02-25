import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste-tecnico';
  products:any = {
    code: "2",
    name: "empresa",
    quantity: "5 mil",
    category: "internacional",
  };


}
