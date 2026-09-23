import { Component, inject, signal } from '@angular/core';
import { Equipment } from '../../../models/equipment.model';
import { EquipmentService } from '../../../services/equipment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'appsuite-equipment-details',
  imports: [],
  templateUrl: './equipment-details.html',
  styleUrl: './equipment-details.css',
})
export class EquipmentDetails {
  public equipment = signal<Equipment | null>(null);
  private route = inject(ActivatedRoute);

  constructor(private _equipSvc:EquipmentService){
  }

  ngOnInit():void{
    const id = this.route.snapshot.paramMap.get('id');
    
    if(id){
      this._equipSvc.getEquipmentById(Number(id)).subscribe({
        next:(response:any) => {
          this.equipment.set(response.equipment);
          console.log(response.equipment);
        },
        error:(err) => {
          console.error('Error getting equipment by id.', err);
        }
      });
    }
  }
}
