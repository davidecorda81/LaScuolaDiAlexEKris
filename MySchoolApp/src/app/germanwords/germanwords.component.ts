import { Component, OnInit } from '@angular/core';
import { Client } from '../api-client';
import { NgFor, NgClass } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

class WordQuestion {
  answer: string = '';
  isCorrect: boolean = false;
  hasSpellingMistake = false;
  italianWord: string = '';
  germanWord: string = '';
}

@Component({
  selector: 'app-germanwords',
  imports: [
    FormsModule,
    NgFor,
    NgClass,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  templateUrl: './germanwords.component.html',
  styleUrl: './germanwords.component.scss',
})
export class GermanwordsComponent implements OnInit {
  checked: boolean = false;
  words: WordQuestion[] = [];

  constructor(private client: Client) {}

  ngOnInit(): void {
    this.getWords();
  }

  private getWords() {
    this.client.getWords().subscribe((data) => {
      console.log(data);
      this.words = data.map((word) => {
        console.log('logging word: ' + word);
        let wordQuestion = new WordQuestion();
        wordQuestion.italianWord = word.italianWord ?? '';
        wordQuestion.germanWord = word.germanWord ?? '';
        console.log(wordQuestion);
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
      word.isCorrect = word.answer == word.germanWord;
    });
  }
}
