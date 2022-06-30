import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms';
import { debounceTime } from "rxjs/operators";
import { BuscarPlatoService} from '../../services/buscar-plato.service';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar-platos',
  templateUrl: './buscar-platos.component.html',
  styleUrls: ['./buscar-platos.component.css']
})
export class BuscarPlatosComponent implements OnInit { 
  // Variable que contiene el formgroup
  form : FormGroup;
  // Variable que contiene el valor del formcontrol Plato
  valorPlato:any;
  // Variable que guarda platos o recetas que vienen del servidor
  platos:any;
  // traer un plato con su information
  infoPlato:any;


  private subjectKeyUp = new Subject<any>();

  constructor( private formBuilder: FormBuilder,
                private buscarPlatoService : BuscarPlatoService) {
    this.form = this.formBuilder.group({
      plato:['',[]]
    })
   }

   get Plato(){
    this.valorPlato = this.form.get('plato')?.value;
    return this.valorPlato;
   }

  ngOnInit(): void {
  }

  buscarPlato(e:Event){
    e.preventDefault();
    this.subjectKeyUp.next(this.form.value.plato);
    console.log(this.form.value.plato.length);
    console.log(this.Plato.length);

      this.subjectKeyUp.pipe((debounceTime(500))).subscribe(inputValue=>{
        if(inputValue.length > 2){
          this.buscarPlatoService.obtenerRecetas(inputValue).subscribe({next: data => {
              console.log("DATOS DE RECETEAS QUE VIENEN DEL SERVIDOR");
              console.log(data);
              console.log(data.results);
              this.platos = data.results;
            },error: error =>{
              Swal.fire(
                'Se produjo un error',
                'Vuelva a intentarlo',
                'error'
              )
            }})
        }
      })
  }

  cargarDatosModal(plato:any){
    this.buscarPlatoService.obtenerUnPlato(plato.id).subscribe(data => {
      console.log(data);
      this.infoPlato = data;
    })
  }

  agregarPlato(plato:any){
    
  }
}