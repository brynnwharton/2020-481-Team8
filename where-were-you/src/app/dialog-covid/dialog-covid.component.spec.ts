import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCovidComponent } from './dialog-covid.component';

describe('DialogCovidComponent', () => {
  let component: DialogCovidComponent;
  let fixture: ComponentFixture<DialogCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
