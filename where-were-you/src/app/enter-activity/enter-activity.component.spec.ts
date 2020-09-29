import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterActivityComponent } from './enter-activity.component';

describe('EnterActivityComponent', () => {
  let component: EnterActivityComponent;
  let fixture: ComponentFixture<EnterActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
