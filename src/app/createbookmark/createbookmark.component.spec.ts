import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebookmarkComponent } from './createbookmark.component';

describe('CreatebookmarkComponent', () => {
  let component: CreatebookmarkComponent;
  let fixture: ComponentFixture<CreatebookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatebookmarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
