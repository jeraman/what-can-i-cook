import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/Recipe';
import { JSONRecipeFormat } from '../../models/JSONRecipeFormat';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-grid',
  templateUrl: './recipe-grid.component.html',
  styleUrls: ['./recipe-grid.component.css']
})
export class RecipeGridComponent implements OnInit {
  recipeGrid:Recipe[];

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    //this.recipeGrid = this.recipeService.getRecipesPlaceholder();
    /*
    THIS IS THE RIGHT WAY TO LOAD FORM THE SERVER
    this.recipeService.getRecipes().subscribe( recipes => {
      this.recipeGrid = recipes;
    });
    */
  }

  searchRecipes(ingredients:string) {
    //this.recipeGrid = this.recipeService.getRecipesPlaceholder(ingredients);
    //this.recipeGrid = this.recipeService.getRecipes(ingredients);

    //reset the result pages
    this.recipeService.resetPage();

    //check the following link for details on why I'm doing (data as any):
    // https://angular.io/guide/http
    this.recipeService.getRecipes(ingredients)
                      .subscribe( data => {
                          this.recipeGrid = (data as any).recipes;
    });
  }

  loadMore() {
    this.recipeService.loadMore()
                      .subscribe( data => {
                          this.recipeGrid = this.recipeGrid.concat((data as any).recipes);
    });
  }

}
