import { Component, OnInit } from '@angular/core';
import { EquipModel } from '../../../models/equipment.model';
import { signal } from '@angular/core';
import { EquipmentService } from '../../../services/equipment';

@Component({
  selector: 'appsuite-model-list',
  imports: [],
  templateUrl: './model-list.html',
  styleUrl: './model-list.css',
})
export class ModelList {
  public models = signal<EquipModel[]>([]);

  constructor(private _equipSvc:EquipmentService){}

  ngOnInit():void {
    this._equipSvc.getAllModels().subscribe({
      next:(response:any) => {
        this.models.set(response.modelDtos);
        console.log(response.modelDtos);
      },
      error:(err) => {
        console.log('Error getting models.', err);
      }
    })
  }
}
