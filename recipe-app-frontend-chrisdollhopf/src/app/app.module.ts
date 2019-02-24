import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesListComponent } from './recepies/components/recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './recepies/components/recipe-details/recipe-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { RecepieContainerComponent } from './recepies/container/recepie-container/recepie-container.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
    NavbarComponent,
    MyRecipesComponent,
    RecepieContainerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
