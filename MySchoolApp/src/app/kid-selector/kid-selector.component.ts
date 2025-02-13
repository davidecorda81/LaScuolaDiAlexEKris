import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-kid-selector',
  imports: [MatSlideToggleModule, MatCardModule],
  templateUrl: './kid-selector.component.html',
  styleUrl: './kid-selector.component.scss'
})
export class KidSelectorComponent {

}
