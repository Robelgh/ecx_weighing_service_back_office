import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgriculturalRoutingModule } from './agricultural-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add_edit.component';

  

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';

import {
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule
  } from '@angular-material-components/datetime-picker';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AgriculturalRoutingModule,

        MatDatepickerModule,MatInputModule,
        MatFormFieldModule,MatNativeDateModule,
        MatRadioModule,

        NgxMatDatetimePickerModule,
        NgxMatTimepickerModule,
        NgxMatNativeDateModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AddEditComponent     
    ]
})
export class AgriculturalModule { }