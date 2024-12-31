import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path:'sections',
                loadComponent: () => import('./business/sections/sections.component'),
            },
            {
                path:'profile',
                loadComponent: () => import('./business/profile/profile.component')
            },
            {
                path:'tables',
                loadComponent: () => import('./business/tables/tables.component')
            },
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
