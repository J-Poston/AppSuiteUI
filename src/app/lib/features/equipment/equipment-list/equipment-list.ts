import { Component, OnInit } from '@angular/core';
import { signal } from '@angular/core';
import { Equipment } from '../../../models/equipment.model';
import { EquipmentService } from '../../../services/equipment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'appsuite-equipment-list',
  imports: [RouterLink],
  templateUrl: './equipment-list.html',
  styleUrl: './equipment-list.css',
})
export class EquipmentList {
  public equipment = signal<Equipment[]>([]);

  constructor(private _equipSvc:EquipmentService){}

  ngOnInit():void {
    this._equipSvc.getEquipments().subscribe({
      next:(response:any) => {
        this.equipment.set(response.equipments);
        console.log(response.equipments);
      },
      error:(err) => {
        console.error('Error getting Equipment.', err);
      }
    });
  }
}
