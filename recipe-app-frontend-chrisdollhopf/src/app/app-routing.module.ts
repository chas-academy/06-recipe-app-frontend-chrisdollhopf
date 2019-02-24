import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecepieContainerComponent } from './recepies/container/recepie-container/recepie-container.component';

const routes: Routes = [ // can only contain objects
  { path: 'recepies', component: RecepieContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
