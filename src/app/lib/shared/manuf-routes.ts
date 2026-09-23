import { Routes } from '@angular/router';
import { ManufacturerDetails } from "../features/equipment/manufacturer-details/manufacturer-details";
import { ManufacturerList } from "../features/equipment/manufacturer-list/manufacturer-list";

export const manufRoutes:Routes=[
    {
        path: "equip/mfrs",
        component: ManufacturerList,
        title: "Manufacturers"
    },
    {
        path: "equip/mfr/:id",
        component: ManufacturerDetails,
        title: "Manuf. Details"
    }
]