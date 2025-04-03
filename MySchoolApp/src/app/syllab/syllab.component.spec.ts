import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabComponent } from './syllab.component';

describe('SyllabComponent', () => {
  let component: SyllabComponent;
  let fixture: ComponentFixture<SyllabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyllabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyllabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
