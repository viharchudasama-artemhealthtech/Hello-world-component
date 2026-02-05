import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent {

  hospital = "loading..."
  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.jokeService.getJoke().subscribe((data: any) => {
      this.hospital = data[0].name;
    });
  }

}
