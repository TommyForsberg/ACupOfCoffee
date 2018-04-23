import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeCupComponent } from './coffee-cup.component';

describe('CoffeeCupComponent', () => {
  let component: CoffeeCupComponent;
  let fixture: ComponentFixture<CoffeeCupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeCupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
