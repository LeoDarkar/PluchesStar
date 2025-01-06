import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: '',
                loadComponent: () => import('./business/sections/sections.component'),
                pathMatch: 'full'
            },
            {
                path: 'sections',
                loadComponent: () => import('./business/sections/sections.component')
            },
            
        ]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];