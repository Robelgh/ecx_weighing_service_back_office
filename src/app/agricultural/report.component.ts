import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
import { AgriculturalService,PrintService, AlertService } from '../_services';
import { first } from 'rxjs/operators';

@Component({ templateUrl: 'report.component.html' })
export class ReportComponent implements OnInit {

    id!: string;
    form!: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private agriculturalService: AgriculturalService
        ) {}

    

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        console.log(this.id)

        
            this.agriculturalService.getById(this.id)
                .pipe(first())
                .subscribe(x => this.form.patchValue(x));

                console.log(this.form)
        
     }
 }