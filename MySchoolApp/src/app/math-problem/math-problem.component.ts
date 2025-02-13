import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'

interface MathProblem {
  operand1: number;
  operand2: number;
  operator: number;
  result: number;
  answer: number;
}

@Component({
  selector: 'app-math-problem',
  templateUrl: './math-problem.component.html',
  styleUrls: ['./math-problem.component.scss'],
  imports: [FormsModule, NgFor, MatButtonModule, MatInputModule, MatIconModule]
})
export class MathProblemComponent implements OnInit {
  problems: MathProblem[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<MathProblem[]>('http://localhost:5115/MathProblem?profile=1').subscribe(data => {
      this.problems = data;
    });
  }

  submitAnswers() {
    this.problems.forEach(problem => {
      // Check answers logic here, for now just log the problem and answer
      console.log(`${problem.operand1} ${problem.operator} ${problem.operand2} = ${problem.result}`);
    });
  }
}

