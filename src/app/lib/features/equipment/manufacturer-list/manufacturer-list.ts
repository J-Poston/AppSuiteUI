import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../../../services/equipment';
import { EquipManufacturer } from '../../../models/equipment.model';
import { signal } from '@angular/core';

@Component({
  selector: 'appsuite-manufacturer-list',
  imports: [],
  templateUrl: './manufacturer-list.html',
  styleUrl: './manufacturer-list.css',
})
export class ManufacturerList {

  public mfrs = signal<EquipManufacturer[]>([]);

  constructor (private _equipSvc: EquipmentService){}

  ngOnInit():void{

    this._equipSvc.getAllManufacturers().subscribe({
      next:(response:any) =>{
        this.mfrs.set(response.manufacturerDtos);
        console.log(response.manufacturerDtos);
      },
      error:(err) =>{
        console.error('Error getting Manufacturers.', err);
      }
    })

  }
}
