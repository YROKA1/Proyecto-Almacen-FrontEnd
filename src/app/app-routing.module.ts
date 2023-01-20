import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './Components/stock/stock.component';

const routes: Routes = [
  { path: ' ', redirectTo: 'login', pathMatch: 'full' },
  { path: 'stock', component: StockComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
