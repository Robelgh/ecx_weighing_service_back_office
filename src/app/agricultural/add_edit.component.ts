import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AgriculturalService, AlertService } from '../_services';
import { MustMatch } from '../_helper';


@Component({ templateUrl: 'add_edit.component.html' })

export class AddEditComponent implements OnInit{
   
    form!: FormGroup;
    id!: string;
    isAddMode!: boolean;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private agriculturalService: AgriculturalService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
     
  }
}
  