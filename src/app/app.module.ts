import { NgModule } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModalTemplateComponent } from './Components/modal-template/modal-template.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormularioComponenteComponent } from './Formularios/form/formulario-componente.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { StockComponent } from './Components/stock/stock.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent, 
    FormularioComponenteComponent, 
    ModalTemplateComponent,  StockComponent, 

  ],
  imports: [
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    NgChartsModule,
    BrowserModule, 
    AppRoutingModule, 
    MatGridListModule, 
    BrowserAnimationsModule, 
    MatToolbarModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatListModule, 
    MatCardModule,
    LayoutModule,
    MatFormFieldModule, 
    MatMenuModule,  
    MatInputModule, 
    MatButtonModule, 
    MatSelectModule, 
    MatRadioModule, 
    MatPaginatorModule, 
    MatTableModule, 
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
