import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWebDataComponent } from './main-web-data.component';

describe('MainWebDataComponent', () => {
  let component: MainWebDataComponent;
  let fixture: ComponentFixture<MainWebDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainWebDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWebDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
