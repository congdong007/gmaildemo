import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportedmailComponent } from './importedmail.component';

describe('ImportedmailComponent', () => {
  let component: ImportedmailComponent;
  let fixture: ComponentFixture<ImportedmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportedmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportedmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
