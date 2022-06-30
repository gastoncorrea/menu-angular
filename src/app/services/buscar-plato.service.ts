import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscarPlatoService {
  URL:string = "https://api.spoonacular.com/recipes/complexSearch?apiKey=e100789518f2401bbf9ca8097f1b01be"
  URLINFORMATION:string = "https://api.spoonacular.com/recipes/";
  constructor(private http: HttpClient) { }

  obtenerRecetas(inputValue:any):Observable<any> {
    return this.http.get(this.URL+"&query="+inputValue);
  }

  obtenerUnPlato(id:any):Observable<any> {
    return this.http.get(this.URLINFORMATION + `${id}/information?apiKey=e100789518f2401bbf9ca8097f1b01be`);
  }
}
