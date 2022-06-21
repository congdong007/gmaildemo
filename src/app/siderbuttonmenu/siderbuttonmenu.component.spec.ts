import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderbuttonmenuComponent } from './siderbuttonmenu.component';

describe('SiderbuttonmenuComponent', () => {
  let component: SiderbuttonmenuComponent;
  let fixture: ComponentFixture<SiderbuttonmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiderbuttonmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderbuttonmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
