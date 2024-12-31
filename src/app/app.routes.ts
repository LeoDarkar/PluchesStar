import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: '',
                redirectTo: 'sections',
                pathMatch: 'full'
            }
            

        ]
    },
    {
        path: '**',
        redirectTo: 'sections'
    }
];
