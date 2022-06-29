import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {
  @Input ('platoTraidos') platos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
