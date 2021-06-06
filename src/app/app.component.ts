import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('moveInLeft', [
      transition('void=> *', [
        style({ transform: 'translateX(300px)' }),
        animate(
          200,
          keyframes([
            style({ transform: 'translateX(300px)' }),
            style({ transform: 'translateX(0)' }),
          ])
        ),
      ]),
      transition('void=> *', [
        style({ transform: 'translateX(0px)' }),
        animate(
          200,
          keyframes([
            style({ transform: 'translateX(0px)' }),
            style({ transform: 'translateX(300px)' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'DotNet2021-Front';

  todoArray: string[] = [];

  @ViewChild('todoForm', { static: false }) todoForm: any;

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

  todoSubmit(form: any) {
    if (form != '') {
      console.log(form);
      this.todoArray.push(form.todo);

      this.todoForm.resetForm();
    } else {
      alert(' filed required!');
    }
  }
}
