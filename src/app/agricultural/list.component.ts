import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AgriculturalService } from '../_services/agricultural.service';
import { Agricultural } from '../_model/agricultural';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    agricultural!: Agricultural[];

    constructor(private agriculturalService: AgriculturalService) {}

    ngOnInit() {
        this.agriculturalService.getAll()
            .pipe(first())
            .subscribe(agricultural => this.agricultural = agricultural);

            console.log(this.agricultural)
         }

  

    deleteUser(id: string) {
        // const user = this.users.find(x => x.id === id);
        // if (!user) return;
        // user.isDeleting = true;
        // this.userService.delete(id)
        //     .pipe(first())
        //     .subscribe(() => this.users = this.users.filter(x => x.id !== id));
    }
}