import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentActivity } from './equipment-activity';

describe('EquipmentActivity', () => {
  let component: EquipmentActivity;
  let fixture: ComponentFixture<EquipmentActivity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentActivity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentActivity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
