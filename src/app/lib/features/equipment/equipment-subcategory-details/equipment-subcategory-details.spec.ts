import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSubcategoryDetails } from './equipment-subcategory-details';

describe('EquipmentSubcategoryDetails', () => {
  let component: EquipmentSubcategoryDetails;
  let fixture: ComponentFixture<EquipmentSubcategoryDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentSubcategoryDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentSubcategoryDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
