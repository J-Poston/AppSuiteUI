import { Routes } from '@angular/router';
import { ModelDetails } from '../features/equipment/model-details/model-details';
import { ModelActivity } from '../features/equipment/model-activity/model-activity';
import { ModelList } from '../features/equipment/model-list/model-list';
import { ModelPage } from '../features/equipment/model-page/model-page';

export const modelRoutes : Routes =[
    {
        path: "equip/models/:id",
        component: ModelPage,
        title: "Model Details",
        children:[
            
            {
                path: '',
                component: ModelDetails
            },
            {
                path: "activity",
                component: ModelActivity
            }
        ]
    },
    {
        path: "equip/models",
        component: ModelList
    }
];