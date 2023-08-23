import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Observable, firstValueFrom } from 'rxjs';
import { AgriculturalService } from '../_services/agricultural.service';
import { Agricultural } from '../_model/agricultural';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    agricultural!: Agricultural[];

    constructor(private agriculturalService: AgriculturalService) {}

   async ngOnInit() {
        this.agricultural= await this.agriculturalService.getAll()
      
        console.log(this.agricultural)
        
         }

        async deleteUser(id: string) {
            const agricultural = this.agricultural.find(x => x.id === id);
            if (!agricultural) return;
            agricultural.isDeleting = true;
            this.agriculturalService.delete(id)
            this.agricultural= await this.agricultural.filter(x => x.id !== id)
                
        }
}