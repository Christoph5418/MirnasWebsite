import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOnlinePageComponent } from './order-online-page.component';

describe('OrderOnlinePageComponent', () => {
  let component: OrderOnlinePageComponent;
  let fixture: ComponentFixture<OrderOnlinePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderOnlinePageComponent]
    });
    fixture = TestBed.createComponent(OrderOnlinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
