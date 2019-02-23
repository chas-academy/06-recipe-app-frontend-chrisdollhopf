import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesListComponent } from './recepies/components/recipes-list/recipes-list.component';
import { RecipeDetailsComponent} from './recepies/components/recipe-details/recipe-details.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component'

const routes: Routes = [ // can only contain objects
  { path: 'recipes-list', component: RecipesListComponent },
  { path: 'recipe-details', component: RecipeDetailsComponent },
  { path: 'my-recipes', component: MyRecipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
