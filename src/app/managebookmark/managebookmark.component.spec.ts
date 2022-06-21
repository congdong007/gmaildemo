import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagebookmarkComponent } from './managebookmark.component';

describe('ManagebookmarkComponent', () => {
  let component: ManagebookmarkComponent;
  let fixture: ComponentFixture<ManagebookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagebookmarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagebookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
