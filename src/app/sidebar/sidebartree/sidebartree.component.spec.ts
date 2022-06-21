import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebartreeComponent } from './sidebartree.component';

describe('SidebartreeComponent', () => {
  let component: SidebartreeComponent;
  let fixture: ComponentFixture<SidebartreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebartreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebartreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
