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

      this.id = this.route.snapshot.params['id'];
        this.isAddMode = !this.id;
        
        // password not required in edit mode
        const passwordValidators = [Validators.minLength(6)];
        if (this.isAddMode) {
            passwordValidators.push(Validators.required);
        }

        const formOptions: AbstractControlOptions = { validators: MustMatch('password', 'confirmPassword') };
        this.form = this.formBuilder.group({
            consignment: ['', Validators.required],
            warehouse: ['', Validators.required],
            clientId: ['', Validators.required],
            commodity: ['', [Validators.required]],
            driverName: ['', Validators.required],
            license: ['', Validators.required],
            placeIssued: ['', Validators.required],
            truckPlate: ['', [Validators.required]],
            trailerPlate: ['', Validators.required],
            voucherNumber: ['', Validators.required],
            truckNumberPlomps: ['', Validators.required],
            trailerNumberPlomps: ['', [Validators.required]],
            region: ['', Validators.required],
            zone: ['', Validators.required],
            woreda: ['', Validators.required],
            specficArea: ['', [Validators.required]],

            productionYear: ['', Validators.required],
            numberOfBags: ['', Validators.required],
            vehicleSize: ['', [Validators.required]],
            estimatedWeight: ['', Validators.required],
            grossWeight: ['', Validators.required],
            ticketNumber: ['', Validators.required],
            dateReceived: ['', [Validators.required]],
            
            password: ['', [Validators.minLength(6), this.isAddMode ? Validators.required : Validators.nullValidator]],
            confirmPassword: ['', this.isAddMode ? Validators.required : Validators.nullValidator]
        }, formOptions);

        if (!this.isAddMode) {
            this.agriculturalService.getById(this.id)
                .pipe(first())
                .subscribe(x => this.form.patchValue(x));
        }
     
  }
}
  