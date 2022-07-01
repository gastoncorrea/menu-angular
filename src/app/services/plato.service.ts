import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {
  listaPlatos:object[] = [];
  constructor() { }

  agregarPlato(plato:any){
    this.listaPlatos.push(plato);
  }
}
