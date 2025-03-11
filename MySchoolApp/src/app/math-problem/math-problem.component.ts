import { Component, Inject, inject, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card';
import { Client, EMathOperation, EProfile, MathProblem } from '../api-client';

class MathProblemEx extends MathProblem{
  answer?: number;
}


@Component({
  selector: 'app-math-problem',
  templateUrl: './math-problem.component.html',
  styleUrls: ['./math-problem.component.scss'],
  imports: [FormsModule, NgFor, MatButtonModule, MatInputModule, MatIconModule, MatCardModule]
})
export class MathProblemComponent implements OnInit {
  problems: MathProblemEx[] = [];
  EMathOperation = EMathOperation;

  constructor(private client: Client) {}

  ngOnInit(): void {
    this.client.getMathProblem(EProfile.Kris).subscribe(data => {
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

