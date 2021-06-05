import { variable } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DotNet2021-Front';

  idArray = [''];

  addId(value: string) {
    if (value != '') {
      this.idArray.push(value);
      console.log(this.idArray);
    } else {
      alert('Id Requis!!');
    }
  }
}
