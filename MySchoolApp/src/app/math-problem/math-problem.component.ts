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
import { SharedService } from '../shared.service';

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
  kid: EProfile|null = null;

  constructor(private client: Client, private sharedService: SharedService ) {}

  ngOnInit(): void {
    this.sharedService.kid$.subscribe(value => {
      this.kid = value;
      this.checked = false;
      console.log('Kid value:', this.kid);
      this.getProblems();
    });
  }

  private getProblems() {
    if(this.kid === null)
      throw new Error("kid is null");
    this.client.getMathProblem(this.kid).subscribe((data) => {
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

  getOperator(operator: EMathOperation|undefined) {
    switch(operator){
      case EMathOperation.Add: return '+';
      case EMathOperation.Subtract: return '-';
      case EMathOperation.Multiply: return '*';
      case EMathOperation.Divide: return '/';
      default: throw new Error("Invalid operator"); 
    }
    }
    
}
