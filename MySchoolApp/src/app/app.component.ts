import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MathProblemComponent } from './math-problem/math-problem.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { KidSelectorComponent } from "./kid-selector/kid-selector.component";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MathProblemComponent, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'La scuola di Alex e Kris';
}
