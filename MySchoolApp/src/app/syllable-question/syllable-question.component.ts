import { Component, Input } from '@angular/core';
import { SyllableQuestion } from '../models/syllable-question.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-syllable-question',
  imports: [MatCardModule, MatButtonModule, NgFor, NgIf],
  templateUrl: './syllable-question.component.html',
  styleUrl: './syllable-question.component.scss',
})
export class SyllableQuestionComponent {
  @Input() word!: SyllableQuestion;

  selectedValue: string = '';
  isCorrect: boolean = false;

  check(value: string) {
    this.selectedValue = value;
    this.isCorrect = value == this.word.result;

    if(this.isCorrect) {
      this.word.word = this.word.word.replace("___", value);
    }
   }
}
