import { Routes } from '@angular/router';
import { MathProblemComponent } from './math-problem/math-problem.component';
import { StoryComponent } from './story/story.component';
export const routes: Routes = [   
    { path: 'calcoli', component: MathProblemComponent },
    { path: 'storie', component: StoryComponent },
];