import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceSchedule } from './maintenance-schedule';

describe('MaintenanceSchedule', () => {
  let component: MaintenanceSchedule;
  let fixture: ComponentFixture<MaintenanceSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintenanceSchedule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceSchedule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
