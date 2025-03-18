import { Component } from '@angular/core';
import { Client, Story } from '../api-client';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-story',
  imports: [MatCardModule],
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss'
})
export class StoryComponent {
 story: Story =  new Story ({ title: "Sto caricando...",  content: 'Sto caricando...'});

  constructor(private client: Client) {}

  ngOnInit(): void {
    this.client.getStory().subscribe(data => {
      this.story = data;
    });
  }
}
