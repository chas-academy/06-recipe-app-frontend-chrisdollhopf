import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecepieContainerComponent } from './container/recepie-container/recepie-container.component';
//import { ProductListComponent } from './components/product-list/product-list.component';
//import { ProductEditComponent } from './components/product-edit/product-edit.component';


const recepieRoutes: Routes = [
  { path: 'recepies', component: RecepieContainerComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(recepieRoutes)
  ],
  declarations: [
    RecepieContainerComponent,
    //ProductListComponent,
    //ProductEditComponent
  ]
})
export class RecepieModule { }
