import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';

const AgriculturalModule = () => import('./agricultural/agricultural.module').then(x => x.AgriculturalModule);

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', loadChildren: AgriculturalModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }