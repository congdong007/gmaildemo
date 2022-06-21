import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmailsComponent } from './allmails.component';

describe('AllmailsComponent', () => {
  let component: AllmailsComponent;
  let fixture: ComponentFixture<AllmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllmailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
