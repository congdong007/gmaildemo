import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllspamComponent } from './allspam.component';

describe('AllspamComponent', () => {
  let component: AllspamComponent;
  let fixture: ComponentFixture<AllspamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllspamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllspamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
