import { Component, OnInit,Input } from '@angular/core';
import { PlatoService } from 'src/app/services/plato.service';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {
  platos:any;
  constructor(private platoService:PlatoService) { }

  ngOnInit(): void {
    this.platos = this.platoService.listaPlatos;
  }

}
