import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatePartiesPageComponent } from './private-parties-page.component';

describe('PrivatePartiesPageComponent', () => {
  let component: PrivatePartiesPageComponent;
  let fixture: ComponentFixture<PrivatePartiesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivatePartiesPageComponent]
    });
    fixture = TestBed.createComponent(PrivatePartiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
