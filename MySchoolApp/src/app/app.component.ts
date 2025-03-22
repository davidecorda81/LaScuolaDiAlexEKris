import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MathProblemComponent } from './math-problem/math-problem.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { KidSelectorComponent } from "./kid-selector/kid-selector.component";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import { NgClass } from '@angular/common';
import { EProfile } from './api-client';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatSlideToggleModule, MatExpansionModule, MatMenuModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'La scuola di Alex e Kris';
  kid = EProfile.Alex;
  profiles = EProfile;
  
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.setKid(this.kid);
  }

setKid(kid: EProfile) {
  this.kid = kid;
  this.sharedService.setKid(this.kid);
}

}
