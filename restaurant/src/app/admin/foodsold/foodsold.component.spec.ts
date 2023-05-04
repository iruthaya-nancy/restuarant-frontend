import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsoldComponent } from './foodsold.component';

describe('FoodsoldComponent', () => {
  let component: FoodsoldComponent;
  let fixture: ComponentFixture<FoodsoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodsoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodsoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
