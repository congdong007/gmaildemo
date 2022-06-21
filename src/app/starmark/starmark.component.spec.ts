import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarmarkComponent } from './starmark.component';

describe('StarmarkComponent', () => {
  let component: StarmarkComponent;
  let fixture: ComponentFixture<StarmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarmarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
