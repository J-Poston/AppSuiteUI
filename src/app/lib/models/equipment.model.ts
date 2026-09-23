export interface Equipment {
    equipmentId?: number,
    manufacturerId: number,
    manufacturerName: string,
    modelId: number,
    modelNumber: string,
    description: string,
    categoryId: number,
    categoryName: string,
    subcategoryId: number,
    subcategoryName: string,
    serialNumber: string,
    lotNumber: string
}

export interface EquipModel {
    modelId?: number,
    modelNum: string,
    modelDescription: string,
    makeId?: number,
    make: string,
    categoryId?: number,
    categoryName?: string,
    subcategoryId?: number,
    subcategoryName?: string,
    lotTracked?: boolean,
    serialized?: boolean
}

export interface EquipManufacturer{
    makeId: number,
    makeName: string
}

export interface EquipCategory{
    categoryId: number,
    categoryName: string,
    description: string,
    subcategories: EquipSubcategory[]
}

export interface EquipSubcategory {
    subcategoryId: number,
    subcategoryName: string,
    description: string
}