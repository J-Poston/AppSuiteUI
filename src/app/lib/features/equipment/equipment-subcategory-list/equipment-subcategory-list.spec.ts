import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSubcategoryList } from './equipment-subcategory-list';

describe('EquipmentSubcategoryList', () => {
  let component: EquipmentSubcategoryList;
  let fixture: ComponentFixture<EquipmentSubcategoryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentSubcategoryList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentSubcategoryList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
