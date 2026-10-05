import { Component, input, inject, signal, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EquipmentService } from '../../../services/equipment';
import { AddUpdateModelDto, EquipCategory, EquipManufacturer, EquipModel, EquipSubcategory } from '../../../models/equipment.model';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'appsuite-model-details',
  imports: [ReactiveFormsModule],
  templateUrl: './model-details.html',
  styleUrl: './model-details.css',
})
export class ModelDetails {

  private equipSvc = inject(EquipmentService);
  public formBuilder = inject(FormBuilder);

  public id = input.required<string>();
  public model = signal<EquipModel | null>(null);
  public manufacturers = signal<EquipManufacturer[]>([]);
  public categories = signal<EquipCategory[]>([]);
  public subcategories = signal<EquipSubcategory[]>([]);

  public modelForm = this.formBuilder.group({
    modelId: new FormControl<number>(0,{nonNullable:true}),
    modelNumber: new FormControl<string>('',{nonNullable:true}),
    manufacturerId: new FormControl<number>(0, {nonNullable:true}),
    categoryId: new FormControl<number>(0,{nonNullable:true}),
    subcategoryId: new FormControl<number>(0,{nonNullable: true}),
    modelDescription: new FormControl<string>('',{nonNullable:true}),
    serialized: new FormControl<boolean>(false,{nonNullable:true}),
    lotTracked: new FormControl<boolean>(false, {nonNullable:true})
  });

  private _trackModelChanges = effect(() => {
    const currentModel = this.model();
    if(currentModel){
      this.patchModelForm();
    }
  });

  private patchModelForm(){
    if(this.model()){
      
    }
    this.modelForm.patchValue({
      modelId: this.model()?.modelId,
      modelNumber: this.model()?.modelNum,
      manufacturerId: this.model()?.makeId,
      modelDescription: this.model()?.modelDescription,
      categoryId: this.model()?.categoryId,
      subcategoryId: this.model()?.subcategoryId,
      serialized: this.model()?.serialized,
      lotTracked: this.model()?.lotTracked
    });
  }
  
  public onLoad() {

  }

  public onSubmit(){
    this.addUpdateModel();
  }

  public onClick(){

  }

  public getManufacturers() {
    this.equipSvc.getAllManufacturers().subscribe({
      next:(response:any) => {
        this.manufacturers.set(response.manufacturerDtos);
      },
      error:(err) => {
        console.error('Error getting manufacturers', err);
      }
    });
  }

  public getCategories(){
    this.equipSvc.getCategories().subscribe({
      next:(response:any)=>{
        this.categories.set(response.categoryDtos);
      },
      error:(err)=>{
        console.error('Error getting categories.', err);
      }
    });
  }

  public getSubcategories(categoryId?:number){
    this.equipSvc.getSubcategories().subscribe({
      next:(response:any) =>{
        this.subcategories.set(response.subcategories);
      },
      error:(err)=>{
        console.error('Error getting subcategories.', err);
      }
    });
  }

  public getModelById(id:string) {
    this.equipSvc.getModelById(Number(id)).subscribe({
      next:(response:any) => {
        console.log(response);
        console.log(response.modelDto);
        this.model.set(response.modelDto);
      },
      error:(err) => {
        console.error('Error getting Model by Id', err);
      }
    });
  }

  private addUpdateModel(){

    const modelDto:AddUpdateModelDto = {
      modelId: this.modelForm.controls.modelId.getRawValue(),
      modelNumber: '',
      manufacturerId: this.modelForm.controls.manufacturerId.getRawValue(),
      manufacturerName: '',
      modelDescription: this.modelForm.controls.modelDescription.getRawValue(),
      categoryId: this.modelForm.controls.categoryId.getRawValue(),
      categoryName: '',
      subcategoryId: this.modelForm.controls.subcategoryId.getRawValue(),
      subcategoryName: '',
      lotTracked: this.modelForm.controls.lotTracked.getRawValue(),
      serialized: this.modelForm.controls.serialized.getRawValue()
    }

    this.equipSvc.addUpdateModel(modelDto).subscribe({
      next:(response:any)=>{
        
        // different property names between getModelById() and addUpdateModel()
        const addUpdateDto:AddUpdateModelDto = response.modelDto;
        const getModelDto: EquipModel = {
          modelId: addUpdateDto.modelId,
          modelNum: addUpdateDto.modelNumber,
          makeId: addUpdateDto.manufacturerId, // 
          makeName: addUpdateDto.manufacturerName, //
          categoryId: addUpdateDto.categoryId,
          categoryName: addUpdateDto.categoryName,
          subcategoryId: addUpdateDto.subcategoryId,
          subcategoryName: addUpdateDto.subcategoryName,
          serialized: addUpdateDto.serialized,
          lotTracked: addUpdateDto.lotTracked,
          modelDescription: addUpdateDto.modelDescription
        }
        
        this.model.set(getModelDto);
      }
    });
    
  }

  ngOnInit():void {

    const modelId = this.id();
    this.getManufacturers();
    this.getCategories();
    this.getSubcategories();
    this.getModelById(modelId);

  }

}
