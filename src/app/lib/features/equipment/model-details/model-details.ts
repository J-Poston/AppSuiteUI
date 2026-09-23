import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EquipmentService } from '../../../services/equipment';
import { EquipModel } from '../../../models/equipment.model';

@Component({
  selector: 'appsuite-model-details',
  imports: [RouterOutlet],
  templateUrl: './model-details.html',
  styleUrl: './model-details.css',
})
export class ModelDetails {

  public model = signal<EquipModel | null>(null);
  
  constructor(private _equipSvc:EquipmentService){}


}
