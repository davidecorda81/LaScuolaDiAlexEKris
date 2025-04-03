import { Routes } from '@angular/router';
import { MathProblemComponent } from './math-problem/math-problem.component';
import { StoryComponent } from './story/story.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { GermanwordsComponent } from './germanwords/germanwords.component';
import { SyllabComponent } from './syllab/syllab.component';
export const routes: Routes = [   
    { path: 'calcoli', component: MathProblemComponent },
    { path: 'storie', component: StoryComponent },
    { path: 'conversioni', component: ConversionsComponent },
    { path: 'vocaboli-tedesco', component: GermanwordsComponent },
    { path: 'sillabe', component: SyllabComponent },
];