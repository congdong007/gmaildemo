import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigdatatypeComponent } from './bigdatatype.component';

describe('BigdatatypeComponent', () => {
  let component: BigdatatypeComponent;
  let fixture: ComponentFixture<BigdatatypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigdatatypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigdatatypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
