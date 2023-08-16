import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment.dev';
import { Agricultural } from '../_model/agricultural';

const baseUrl = `${environment.apiUrl}/Agricultural`;

@Injectable({ providedIn: 'root' })
export class AgriculturalService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Agricultural[]>(baseUrl);
    }

    getById(id: string) {
        return this.http.get<Agricultural>(`${baseUrl}/${id}`);
    }

    create(params: any) {
        return this.http.post(baseUrl, params);
    }

    update(id: string, params: any) {
        return this.http.put(`${baseUrl}/${id}`, params);
    }

    delete(id: string) {
        return this.http.delete(`${baseUrl}/${id}`);
    }
}