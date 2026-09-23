import { Component, OnInit } from '@angular/core';
import { signal } from '@angular/core';
import { EquipSubcategory } from '../../../models/equipment.model';
import { EquipmentService } from '../../../services/equipment';

@Component({
  selector: 'appsuite-equipment-subcategory-list',
  imports: [],
  templateUrl: './equipment-subcategory-list.html',
  styleUrl: './equipment-subcategory-list.css',
})
export class EquipmentSubcategoryList {
  public subcategories = signal<EquipSubcategory[]>([]);

  constructor(private _equipSvc:EquipmentService){}

  ngOnInit():void {
    this._equipSvc.getSubcategories().subscribe({
      next:(response:any) => {
        this.subcategories.set(response.subcategories);
        console.log(response.subcategories);
      },
      error:(err) => {
        console.error('Error getting subcategories.', err);
      }
    });
  }
}
