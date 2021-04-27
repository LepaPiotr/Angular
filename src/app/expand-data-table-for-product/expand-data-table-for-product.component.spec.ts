import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandDataTableForProductComponent } from './expand-data-table-for-product.component';

describe('ExpandDataTableForProductComponent', () => {
  let component: ExpandDataTableForProductComponent;
  let fixture: ComponentFixture<ExpandDataTableForProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandDataTableForProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandDataTableForProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
