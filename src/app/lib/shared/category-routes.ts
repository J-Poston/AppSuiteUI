import { Routes } from "@angular/router";
import { EquipmentCategoryList } from "../features/equipment/equipment-category-list/equipment-category-list";
import { EquipmentCategoryDetails } from "../features/equipment/equipment-category-details/equipment-category-details";
import { EquipmentSubcategoryList } from "../features/equipment/equipment-subcategory-list/equipment-subcategory-list";
import { EquipmentSubcategoryDetails } from "../features/equipment/equipment-subcategory-details/equipment-subcategory-details";

export const categoryRoutes : Routes = [
    {
        path: "equip/categories",
        component: EquipmentCategoryList,
        title: "Categories"
    },
    {
        path: "equip/categories/:id",
        component: EquipmentCategoryDetails,
        title: "Category Details"
    },
    {
        path: "equip/subcategories",
        component: EquipmentSubcategoryList,
        title: "Subcategories"
    },
    {
        path: "equip/subcategories/:id",
        component: EquipmentSubcategoryDetails,
        title: "Subcategory Details"
    }
]