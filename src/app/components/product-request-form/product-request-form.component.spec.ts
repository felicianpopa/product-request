import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRequestFormComponent } from './product-request-form.component';

describe('ProductRequestFormComponent', () => {
  let component: ProductRequestFormComponent;
  let fixture: ComponentFixture<ProductRequestFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductRequestFormComponent]
    });
    fixture = TestBed.createComponent(ProductRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
