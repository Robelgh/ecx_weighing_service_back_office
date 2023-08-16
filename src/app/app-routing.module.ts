import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { ListComponent } from './agricultural/list.component';

const AgriculturalModule = () => import('./agricultural/agricultural.module').then(x => x.AgriculturalModule);



const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'agricultural', loadChildren: AgriculturalModule },
    // { path: 'nonagricultural', loadChildren: AgriculturalModule },
    // { path: 'truck', loadChildren: AgriculturalModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }