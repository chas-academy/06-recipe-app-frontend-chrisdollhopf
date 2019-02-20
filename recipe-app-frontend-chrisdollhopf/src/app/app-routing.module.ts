import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailsComponent} from './recipe-details/recipe-details.component';

const routes: Routes = [ // can only contain objects
  { path: 'recipes-list', component: RecipesListComponent },
  { path: 'recipe-details', component: RecipeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
