import { variable } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DotNet2021-Front';

  todoArray: string[] = [];

  addTodo(value: string) {
    if (value != '') {
      this.todoArray.push(value);
      console.log(this.todoArray);
    } else {
      alert('field Required!!');
    }
  }
  deleteItem(todo: string) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
        console.log('delete item');
      }
    }
  }
}
