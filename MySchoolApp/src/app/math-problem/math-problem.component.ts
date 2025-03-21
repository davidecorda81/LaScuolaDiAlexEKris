import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Client, EMathOperation, EProfile, MathProblem } from '../api-client';

class MathProblemEx extends MathProblem {
  answer?: number;
  isCorrect?: boolean = false;
}

@Component({
  selector: 'app-math-problem',
  templateUrl: './math-problem.component.html',
  styleUrls: ['./math-problem.component.scss'],
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
})
export class MathProblemComponent implements OnInit {
  problems: MathProblemEx[] = [];
  EMathOperation = EMathOperation;
  checked: boolean = false;

  constructor(private client: Client) {}

  ngOnInit(): void {
    this.getProblems();
  }

  private getProblems() {
    this.client.getMathProblem(EProfile.Kris).subscribe((data) => {
      this.problems = data;
    });
  }

  refresh() {
    this.getProblems();
    this.checked = false;
  }

  submitAnswers() {
    this.checked = true;
    this.problems.forEach((problem) => {
      problem.isCorrect = problem.answer == problem.result;
    });
  }
}
