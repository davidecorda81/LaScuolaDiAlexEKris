import { Component, OnInit } from '@angular/core';
import { Client } from '../api-client';
import { NgFor, NgClass } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SyllableQuestion } from '../models/syllable-question.model';
import { SyllableQuestionComponent } from "../syllable-question/syllable-question.component";



@Component({
  selector: 'app-syllab',
  templateUrl: './syllab.component.html',
  styleUrl: './syllab.component.scss',
    imports: [
    FormsModule,
    NgFor,
    NgClass,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTooltipModule,
    SyllableQuestionComponent
],
})

export class SyllabComponent implements OnInit {
  checked: boolean = false;
  words: SyllableQuestion[] = [];

  constructor(private client: Client) {}

  ngOnInit(): void {
    this.getWords();
  }

  private getWords() {
    this.client.syllables().subscribe((data) => {
      this.words = data.map((word) => {
        let wordQuestion = new SyllableQuestion();
        wordQuestion.word = word.word ?? '';
        wordQuestion.options = Math.round(Math.random()) == 1? [word.option ?? '', word.answer ?? ''] : [word.answer ?? '', word.option ?? ''];
        wordQuestion.result = word.answer ?? '';
        return wordQuestion;
      });
    });
  }

  refresh() {
    this.getWords();
    this.checked = false;
  }

  submitAnswers() {
    this.checked = true;
    this.words.forEach((word) => {
      word.isCorrect = word.answer == word.result;
    });
  }
}
