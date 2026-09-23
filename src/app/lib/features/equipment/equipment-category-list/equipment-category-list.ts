import { Component, OnInit } from '@angular/core';
import { signal } from '@angular/core';
import { EquipCategory } from '../../../models/equipment.model';
import { EquipmentService } from '../../../services/equipment';
@Component({
  selector: 'appsuite-equipment-category-list',
  imports: [],
  templateUrl: './equipment-category-list.html',
  styleUrl: './equipment-category-list.css',
})
export class EquipmentCategoryList {
  public categories = signal<EquipCategory[]>([]);

  constructor(private _equipSvc:EquipmentService){}

  ngOnInit():void{
    this._equipSvc.getCategories().subscribe({
      next:(response:any) =>{
        this.categories.set(response.categoryDtos);
        console.log(response.categoryDtos)    
      },
      error:(err) => {
        console.log('Error getting Categories.', err);
      }    
    });
  }
}
