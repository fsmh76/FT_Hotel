import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Hotel } from './hotel';

Injectable({
    providedIn: 'root'
})

export class AppService{
constructor(private http: HttpClient) { }

url: string = "http://localhost:3000/Hotel";
getHotel(){
    return this.http.get<Hotel[]>(this.url);
}
}