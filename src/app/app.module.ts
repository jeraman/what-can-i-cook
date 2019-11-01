import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeGridComponent } from './components/recipe-grid/recipe-grid.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { SearchRecipesComponent } from './components/search-recipes/search-recipes.component';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';
import { FootbarComponent } from './components/footbar/footbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatInputModule, MatIconModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    RecipeGridComponent,
    RecipeItemComponent,
    SearchRecipesComponent,
    IngredientListComponent,
    FootbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
