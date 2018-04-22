import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeBrewerComponent } from './coffee-brewer.component';

describe('CoffeeBrewerComponent', () => {
  let component: CoffeeBrewerComponent;
  let fixture: ComponentFixture<CoffeeBrewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeBrewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeBrewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
