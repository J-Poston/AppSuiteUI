import { Injectable } from '@angular/core';
import { Equipment, EquipCategory, EquipManufacturer, EquipModel, EquipSubcategory } from '../models/equipment.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
})
export class EquipmentService {

  private baseUrl = `${environment.apiUrl}/api/equip`;

  constructor(private http: HttpClient ){

  }

  getAllManufacturers(): Observable<EquipManufacturer[]>{
    return this.http.get<EquipManufacturer[]>(`${this.baseUrl}/GetManufacturers`)
    }

  getManufacturerById(manufacturerId:number):Observable<EquipManufacturer>{
    return this.http.get<EquipManufacturer>(`${this.baseUrl}/GetManufacturerById?id=${manufacturerId}`)
  }

  getAllModels():Observable<EquipModel[]>{
    return this.http.get<EquipModel[]>(`${this.baseUrl}/GetModels`)
  }

  getModelById(modelId:number):Observable<EquipModel>{
    return this.http.get<EquipModel>(`${this.baseUrl}/GetModelById?id=${modelId}`)
  }

  getCategories():Observable<EquipCategory[]>{
    return this.http.get<EquipCategory[]>(`${this.baseUrl}/GetCategories`)
  }

  getCategoryById(categoryId:number):Observable<EquipCategory>{
    return this.http.get<EquipCategory>(`${this.baseUrl}/GetCategoryById?id=${categoryId}`)
  }

  getSubcategories():Observable<EquipSubcategory[]>{
    return this.http.get<EquipSubcategory[]>(`${this.baseUrl}/GetSubcategories`)
  }

  getSubcategoryById(subcategoryId:number):Observable<EquipSubcategory>{
    return this.http.get<EquipSubcategory>(`${this.baseUrl}/GetSubcategoryById?id=${subcategoryId}`)
  }

  getEquipments(): Observable<Equipment[]>{
    return this.http.get<Equipment[]>(`${this.baseUrl}/GetEquipments`)
  }

  getEquipmentById(equipId:number): Observable<Equipment>{
    return this.http.get<Equipment>(`${this.baseUrl}/GetEquipmentById?id=${equipId}`)
  }

}
