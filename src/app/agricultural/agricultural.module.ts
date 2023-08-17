import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgriculturalRoutingModule } from './agricultural-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add_edit.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AgriculturalRoutingModule    
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AddEditComponent     
    ]
})
export class AgriculturalModule { }