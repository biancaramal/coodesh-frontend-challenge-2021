import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root'
})

export class HttpService {

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }   

    constructor(
        private http: HttpClient,
    ){}

    get(route: string) {
        return this.http.get(environment.API + route, this.httpOptions);
    }

}