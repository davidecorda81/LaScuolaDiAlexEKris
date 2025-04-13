import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllableQuestionComponent } from './syllable-question.component';

describe('SyllableQuestionComponent', () => {
  let component: SyllableQuestionComponent;
  let fixture: ComponentFixture<SyllableQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyllableQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyllableQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
