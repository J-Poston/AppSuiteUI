import { Routes } from "@angular/router";
import { EquipmentDetails } from "../features/equipment/equipment-details/equipment-details";
import { EquipmentActivity } from "../features/equipment/equipment-activity/equipment-activity";
import { EquipmentList } from "../features/equipment/equipment-list/equipment-list";
import { EquipmentPage } from "../features/equipment/equipment-page/equipment-page";

export const equipRoutes : Routes = [
    {
        path: "equip",
        component: EquipmentList,
        title: "Equipment"
    },
    {
        path: "equip/:id",
        component: EquipmentPage,
        children: [
            {
                path: '',
                component: EquipmentDetails,
                title: "Equip. Details"
            },
            {
                path: "activity",
                component: EquipmentActivity,
                title: "Equip. Activity"
            }
        ]
    }
]