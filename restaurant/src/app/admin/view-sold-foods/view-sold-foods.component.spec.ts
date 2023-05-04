import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSoldFoodsComponent } from './view-sold-foods.component';

describe('ViewSoldFoodsComponent', () => {
  let component: ViewSoldFoodsComponent;
  let fixture: ComponentFixture<ViewSoldFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSoldFoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSoldFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
