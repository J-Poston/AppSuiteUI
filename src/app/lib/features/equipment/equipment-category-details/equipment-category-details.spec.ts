import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentCategoryDetails } from './equipment-category-details';

describe('EquipmentCategoryDetails', () => {
  let component: EquipmentCategoryDetails;
  let fixture: ComponentFixture<EquipmentCategoryDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentCategoryDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentCategoryDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
