import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingsendComponent } from './timingsend.component';

describe('TimingsendComponent', () => {
  let component: TimingsendComponent;
  let fixture: ComponentFixture<TimingsendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimingsendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimingsendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
