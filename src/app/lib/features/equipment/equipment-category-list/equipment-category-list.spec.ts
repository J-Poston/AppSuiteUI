import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentCategoryList } from './equipment-category-list';

describe('EquipmentCategoryList', () => {
  let component: EquipmentCategoryList;
  let fixture: ComponentFixture<EquipmentCategoryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentCategoryList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentCategoryList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
