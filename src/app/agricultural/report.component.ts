import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { AgriculturalService,PrintService, AlertService } from '../_services';
import { Agricultural } from '../_model/agricultural';
import { first } from 'rxjs/operators';

@Component({ templateUrl: 'report.component.html',
              })
export class ReportComponent implements OnInit {

    id!: string;
    agricultural!: any;
    currentDate = new Date().toLocaleString;
    

    constructor(
        
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private agriculturalService: AgriculturalService
        ) {}

    

    async ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        

        // this.form = this.formBuilder.group(
        //     {
            
        //        consignment:'',
        //        warehouse: '',
        //        clientId: '',
        //        commodity: '',
        //        driverName: '',
        //        license: '',
        //        placeIssued: '',
        //        truckPlate: '',
        //        trailerPlate: '',
        //        voucherNumber: '',
        //        truckNumberPlomps: '',
        //        trailerNumberPlomps: '',
        //        region: '',
        //        zone: '',
        //        woreda: '',
        //        specficArea: '',
        //        productionYear: '',
        //        numberOfBags:  '',
        //        vehicleSize:  '',
        //        estimatedWeight:  '',
        //        grossWeight:  '',
        //        ticketNumber:  '',
        //        bankslip:  '',
        //        weighbridgeservicefee:  '',
        //        weighbridgeserviceprovider:  '',
        //        timeReceved:  '',
        //        dateReceived: '',
        //     }
        //   );

        
        this.agricultural=  this.agriculturalService.getById(this.id)

        console.log(this.agricultural)
               
        
     }
 }