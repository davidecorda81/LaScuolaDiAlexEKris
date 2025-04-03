import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanwordsComponent } from './germanwords.component';

describe('GermanwordsComponent', () => {
  let component: GermanwordsComponent;
  let fixture: ComponentFixture<GermanwordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GermanwordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GermanwordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
