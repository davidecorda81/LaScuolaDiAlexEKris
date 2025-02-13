import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidSelectorComponent } from './kid-selector.component';

describe('KidSelectorComponent', () => {
  let component: KidSelectorComponent;
  let fixture: ComponentFixture<KidSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
