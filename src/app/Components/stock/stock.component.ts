import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Service/api.service';
import { ModalService } from 'src/app/Service/modal/modal.service';
import { ModalTemplateComponent } from '../modal-template/modal-template.component';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  checked= false;
  labelPosition = new Array();
  Defectuosos: boolean;
  Optimos: boolean;
  arrayColumns: string[];
  saveBtn = true;
  controlador="Productos";
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public modalservice: ModalService, public service: ApiService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    this.get();

  }
  public async get() {
    await this.service.getAll(this.controlador).then((res) => {
      for (let index = 0; index < res.length; index++) {
        this.loadTable([res[index]]);
       this.labelPosition[res[index].identificador]=res[index].estado;  
      }
      this.dataSource.data = res;
      
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });

  }
  loadEstado(e:any, a:any){
    this.labelPosition[a]=e;
    console.log(e)
    console.log(a)
  }


  loadTable(data: any[]) {

    this.displayedColumns = [];
    for (let column in data[0]) {
      this.displayedColumns.push(column)
    }
  

  }
  filtroOP(e: boolean){
    var filterValue="";
    this.Optimos=e;
    console.log(this.Optimos)
    if(this.Optimos==true){
       filterValue="optimo";
       this.Defectuosos=false;
    }
    if(this.Optimos==false){
       filterValue="";
    }
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  filtroDEF(e: boolean){
    var filterValue="";
    this.Defectuosos=e;
    console.log(this.Defectuosos)
    if(this.Defectuosos==true){
       filterValue="defectuoso";
       this.Optimos=false;
    }
    if(this.Defectuosos==false){
       filterValue="";
    }
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  save() {
    this.saveBtn = true;
    for (let column=0 ; column < this.dataSource.data.length; column++) {
      this.dataSource.data[column].estado=this.labelPosition[this.dataSource.data[column].identificador];
      this.service.putAll(this.controlador + "/" + this.dataSource.data[column].identificador,this.dataSource.data[column])
      console.log(this.dataSource.data);
    }
    console.log(this.labelPosition);
    this.refresh();
    
  }
  refresh(){
    setTimeout(function(){
      window.location.reload();
   }, 2000);
  }
  edit() {
    this.saveBtn = false;
  }
  delete(valor: number) {
    console.log(valor)
    this.service.deleteAll(this.controlador+"/"+ valor)
    this.refresh();
  
  }
  type(ele: any, value: any, val: any) {
    console.log(ele);
    console.log(value);
    console.log(val);
    console.log(ele[val]);
    ele[val] = value;

  }

  id(element: any){
    this.arrayColumns.push(element)
  }
  getValue(event: Event): string {
    
    return (event.target as HTMLInputElement).value;
    
  }






  openDialog() {
    this.modalservice.accion.next(this.controlador)
    this.dialog.open(ModalTemplateComponent, {
      height: 'auto', 
      width: 'auto'
    }); 
  }
}
