import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {

  displayBasic: boolean = true;


  showBasicDialog() {
      this.displayBasic = !this.displayBasic;
      console.log(this.displayBasic);
  }

}
