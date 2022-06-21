import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HassentComponent } from './hassent.component';

describe('HassentComponent', () => {
  let component: HassentComponent;
  let fixture: ComponentFixture<HassentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HassentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HassentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
