import { Routes } from '@angular/router';
import { EquipmentList } from './lib/features/equipment/equipment-list/equipment-list';
import { EquipmentDetails } from './lib/features/equipment/equipment-details/equipment-details';
import { ManufacturerList } from './lib/features/equipment/manufacturer-list/manufacturer-list';
import { ManufacturerDetails } from './lib/features/equipment/manufacturer-details/manufacturer-details';
import { EquipmentCategoryDetails } from './lib/features/equipment/equipment-category-details/equipment-category-details';
import { EquipmentSubcategoryDetails } from './lib/features/equipment/equipment-subcategory-details/equipment-subcategory-details';
import { EquipmentCategoryList } from './lib/features/equipment/equipment-category-list/equipment-category-list';
import { EquipmentSubcategoryList } from './lib/features/equipment/equipment-subcategory-list/equipment-subcategory-list';
import { PageNotFound } from './lib/shared/page-not-found/page-not-found';
import { EquipmentActivity } from './lib/features/equipment/equipment-activity/equipment-activity';
import { modelRoutes } from './lib/shared/model-routes';
import { manufRoutes } from './lib/shared/manuf-routes';
import { categoryRoutes } from './lib/shared/category-routes';
import { HomePage } from './lib/shared/home-page/home-page';
import { equipRoutes } from './lib/shared/equip-routes';


export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    ...categoryRoutes,
    ...manufRoutes,
    ...modelRoutes,
    ...equipRoutes,
    // keep last
    {
        path: "**",
        component: PageNotFound,
        title: "Page Not Found"
    }
];
