import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ModalService } from 'src/app/Service/modal/modal.service';
import { ProductoModel } from '../../Models/ProductoModel';
import { ApiService } from '../../Service/api.service';
@Component({
  selector: 'app-formulario-componente',
  templateUrl: './formulario-componente.component.html',
  styleUrls: ['./formulario-componente.component.css'],
})
export class FormularioComponenteComponent implements OnInit {
  addressForm : FormGroup;



  constructor(
    private fb: FormBuilder,
    public modalService: ModalService,
    public service:ApiService
  ) {
    this.addressForm = this.fb.group({
      'nestado': ['', Validators.required],
      'destado': ['', Validators.required],
    });  
  }

  ngOnInit(): void {
  }
  onSubmit() {
    var  nombreProd =  this.addressForm.controls['nestado'].value
var  estadoProd =  this.addressForm.controls['destado'].value
var Prod: ProductoModel= Object.assign({"nombre":nombreProd,"estado":estadoProd})

this.service.postAll("Productos",Prod);
this.refresh();
  }
  refresh(){
    setTimeout(function(){
      window.location.reload();
   }, 1020);
  }
}

