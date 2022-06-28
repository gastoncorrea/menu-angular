import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // ruta para hacer el logueo
  url:string = "http://challenge-react.alkemy.org/";
  currentUserSubject:BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
   }

  login(credenciales: any): Observable<any> {
    return this.http.post(this.url,credenciales).pipe(map((data)=>{

        localStorage.setItem('currentUser',JSON.stringify(data));
        this.currentUserSubject.next(data);
        return data; 
    }));
  }

  get UsuarioAutenticado()
  { 
    console.log(this.currentUserSubject.value.token);
    return this.currentUserSubject.value
  }
}
