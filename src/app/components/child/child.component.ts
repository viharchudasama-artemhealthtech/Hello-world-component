import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  //name = "I am Child Component."

  // Receiv ing data from parent
  @Input({ required: true })
  Uname: string = ""

  // Sending data to parent
  @Output() myEvent = new EventEmitter<string>()
  sendMessage() {
    this.myEvent.emit(`Hello from child component, ${this.Uname}!`)
  }

  /*status = "Developer"
  salary = 100000
  isbuttondisabled = false
  inputvalue = ""

  users = [
    { id: 1, name: "Piyush", age: 31 },
    { id: 2, name: "Divyansh", age: 11 },
    { id: 3, name: "Jatin", age: 41 },
    { id: 4, name: "Siddharth", age: 51 },
    { id: 5, name: "Parth", age: 61 },
  ]

  alarm() {
    alert("Button clicked")
  }

  greet(e: Event) {
    this.inputvalue = (e.target as HTMLInputElement).value
  }*/
}
