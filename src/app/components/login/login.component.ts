import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {LoginService} from '../../services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
// Formulario para loguearse
  form: FormGroup;
  // mostrar spinner cuando es true
  spinner:boolean;

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private router:Router) {

    this.spinner = false;

    this.form = this.formBuilder.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]      
    })
   }

   get Email(){
    return this.form.get('email');
   }

   get Password(){
    return this.form.get('password');
   }

  ngOnInit(): void {
  }

  loguearse(e:Event){
    e.preventDefault();
    this.spinner = true;
    if(this.form.valid){
      this.loginService.login(this.form.value).subscribe({

        next: data  => {
          console.log("DATOS QUE VIENEN DEL SERVIDOR LUEGO DE LOGUEARSE");
          console.log(data); 
          this.spinner = false;
          this.router.navigate(['/home']);
      },
        error: error=>{
          this.spinner = false;
          if(error.status === 401){
            Swal.fire(
              'No autorizado',
              'Sus usuario o contraseña son incorrectos',
              'error'
            )
          }
        } 
      },)
    }else{
      this.spinner = false;
      this.form.markAllAsTouched();
    }
  }
}
