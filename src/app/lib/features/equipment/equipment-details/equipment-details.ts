import { Component, effect, input, inject, signal } from '@angular/core';
import { EquipCategory, EquipManufacturer, Equipment, EquipSubcategory, EquipModel } from '../../../models/equipment.model';
import { EquipmentService } from '../../../services/equipment';
import { ActivatedRoute } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'appsuite-equipment-details',
  imports: [ReactiveFormsModule],
  templateUrl: './equipment-details.html',
  styleUrl: './equipment-details.css',
})
export class EquipmentDetails {

  private _equipSvc = inject(EquipmentService);
  //private route = inject(ActivatedRoute);
  private formBuilder = inject(FormBuilder);

  public id = input.required<string>();
  public equipment = signal<Equipment | null>(null);
  public categories = signal<EquipCategory[]>([]);
  public subcategories = signal<EquipSubcategory[]>([]);
  public manufacturers = signal<EquipManufacturer[]>([]);
  public models = signal<EquipModel[]>([]);


  public equipmentForm = this.formBuilder.group({
    equipmentId: new FormControl<number>(0, {nonNullable: true}),
    manufacturerId: new FormControl<number>(0, {nonNullable: true}),
    modelId: new FormControl<number>(0, {nonNullable: true}),
    description: new FormControl('', {nonNullable: true}),
    categoryId: new FormControl<number>(0, {nonNullable: true}),
    subcategoryId: new FormControl<number>(0, {nonNullable: true}),
    serialNumber: new FormControl('', {nonNullable: true}),
    lotNumber: new FormControl('', {nonNullable: true})
  });

  private onLoad(){
    this.getCategoryOptions();
    this.getSubcategoryOptions();
    this.getManufacturers();
    this.getModels();

    this.equipmentForm.patchValue({
      equipmentId: this.equipment()?.equipmentId,
      manufacturerId: this.equipment()?.manufacturerId,
      modelId: this.equipment()?.modelId,
      description: this.equipment()?.description,
      categoryId: this.equipment()?.categoryId,
      subcategoryId: this.equipment()?.subcategoryId,
      serialNumber: this.equipment()?.serialNumber,
      lotNumber: this.equipment()?.lotNumber
    });
  }

  public onClick(){

  }

  public onSubmit(){
    
    console.log('Submit event!');
    if(this.equipmentForm.invalid) return;
    
    //const formRawValue = this.equipmentForm.value;
    const formRawValue = this.equipmentForm.getRawValue();
    const selectedCategory = this.categories().find(c => c.categoryId === Number(formRawValue.categoryId));
    const selectedSubcat = this.subcategories().find(s => s.subcategoryId === Number(formRawValue.subcategoryId));

    const equipmentDto: Equipment = {
      ...formRawValue,
      categoryName: selectedCategory ? selectedCategory.categoryName : '',
      subcategoryName: selectedSubcat ? selectedSubcat.subcategoryName : '',
      manufacturerName: '',
      modelNumber: ''
    }
    this.addUpdateEquipment(equipmentDto);
  }

  public addUpdateEquipment(dto: any){
    console.log(dto);
    this._equipSvc.addUpdateEquipment(dto).subscribe({
      next:(response:any) => {
        this.equipment.set(response);
      },
      error:(err) =>{
        console.error('Error saving equipment.', err);
      }
    });
  }

  public getCategoryOptions(){
    this._equipSvc.getCategories().subscribe({
      next:(response:any) => {
        this.categories.set(response.categoryDtos);
      },
      error:(err) => {
          console.error('Error getting categories.', err);
        }
    });
  }

  public getManufacturers(){
    this._equipSvc.getAllManufacturers().subscribe({
      next:(response:any) => {
        this.manufacturers.set(response.manufacturerDtos);
      },
      error:(err) => {
        console.error('Error getting manufacturers.', err);
      }
    });
  }

  public getSubcategoryOptions(){
    this._equipSvc.getSubcategories().subscribe({
      next:(response:any) => {
        this.subcategories.set(response.subcategories);
      },
      error:(err) => {
        console.error('Error getting subcategories.', err);
      }
    })
  }

  public getModels(){
    this._equipSvc.getAllModels().subscribe({
      next:(response:any) => {
        this.models.set(response.modelDtos);
      },
      error:(err) => {
        console.error('Error getting models.', err);
      }
    })
  }

  private _trackEquipmentChanges = effect(()=>{
    const currentEquipment = this.equipment();
    if(currentEquipment){
          this.equipmentForm.patchValue(currentEquipment);
    }
  });  

  ngOnInit():void{

    const equipId = this.id();
    
    if(equipId){
      this._equipSvc.getEquipmentById(Number(equipId)).subscribe({
        next:(response:any) => {
          this.equipment.set(response.equipment);
          this.onLoad();
          console.log(response.equipment);
        },
        error:(err) => {
          console.error('Error getting equipment by id.', err);
        }
      });
    }
  }
}
