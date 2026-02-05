import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JokeComponent } from './components/joke/joke.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, CommonModule, FormsModule , JokeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';

  childName = 'Parent to child'
  message = ""

  receiveMessage(data: string) {
    this.message = data
  }


}
