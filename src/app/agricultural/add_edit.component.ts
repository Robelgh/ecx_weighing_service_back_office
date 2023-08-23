import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControlOptions,AbstractControl, FormBuilder, FormGroup,FormControl , Validators } from '@angular/forms';
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

      ngOnInit(): void {

        this.id = this.route.snapshot.params['id'];
        console.log(this.id == undefined)
        this.isAddMode = (this.id == undefined);

        this.form = this.formBuilder.group(
          {
             id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             createdBy: "string",
             createdDate: "2023-08-22T13:31:32.485Z",
             updatedDate: "2023-08-22T13:31:32.485Z",
             updatedBy: "string",
             consignment: ['', Validators.required],
             warehouse: ['', Validators.required],
             clientId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             commodity: ['', Validators.required],
             driverName: ['', Validators.required],
             license: ['', Validators.required],
             placeIssued: ['', Validators.required],
             truckPlate: ['', Validators.required],
             trailerPlate: ['', Validators.required],
             voucherNumber: ['', Validators.required],
             truckNumberPlomps: ['', Validators.required],
             trailerNumberPlomps: ['', Validators.required],
             region: ['', Validators.required],
             zone: ['', Validators.required],
             woreda: ['', Validators.required],
             specficArea: ['', Validators.required],
             productionYear: ['',Validators.required],
             numberOfBags:  ['',Validators.required],
             vehicleSize:  ['',Validators.required],
             estimatedWeight:  ['',Validators.required],
             grossWeight:  ['',Validators.required],
             ticketNumber:  ['',Validators.required],
             bankslip:  ['',Validators.required],
             weighbridgeservicefee:  ['',Validators.required],
             weighbridgeserviceprovider:  ['',Validators.required],
             timeReceved:  ['',Validators.required],
             dateReceived: "2023-08-22T13:31:32.485Z"
          }
        );
        if (!this.isAddMode) {
            this.agriculturalService.getById(this.id)
                .pipe(first())
                .subscribe(x => this.form.patchValue(x));
        }
      }

      get f(): { [key: string]: AbstractControl } {
        return this.form.controls;
      }

      onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        if (this.isAddMode) {
            this.createAgricultural();
        } else {
            this.updateAgricultural();
        }
    }

    private createAgricultural() {
        console.log("this.form.value")
        console.log(this.form.value)
        this.agriculturalService.create(this.form.value)
            .pipe(first())
            .subscribe(() => {
                this.alertService.success('Agricultural added', { keepAfterRouteChange: true });
                this.router.navigate(['../'], { relativeTo: this.route });
            })
            .add(() => this.loading = false);
    }

    private updateAgricultural() {
        console.log(this.form.value)
        // this.agriculturalService.update(this.id, this.form.value)
        //     .pipe(first())
        //     .subscribe(() => {
        //         this.alertService.success('Agricultural updated', { keepAfterRouteChange: true });
        //         this.router.navigate(['../../'], { relativeTo: this.route });
        //     })
        //     .add(() => this.loading = false);
    }
    
      onReset(): void {
        this.submitted = false;
        this.form.reset();
      }

}




  