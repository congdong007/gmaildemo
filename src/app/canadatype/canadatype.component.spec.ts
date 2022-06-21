import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanadatypeComponent } from './canadatype.component';

describe('CanadatypeComponent', () => {
  let component: CanadatypeComponent;
  let fixture: ComponentFixture<CanadatypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanadatypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanadatypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
