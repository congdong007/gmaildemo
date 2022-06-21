import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedmailsComponent } from './deletedmails.component';

describe('DeletedmailsComponent', () => {
  let component: DeletedmailsComponent;
  let fixture: ComponentFixture<DeletedmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedmailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
