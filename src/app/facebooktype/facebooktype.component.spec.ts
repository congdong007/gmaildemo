import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebooktypeComponent } from './facebooktype.component';

describe('FacebooktypeComponent', () => {
  let component: FacebooktypeComponent;
  let fixture: ComponentFixture<FacebooktypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebooktypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebooktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
