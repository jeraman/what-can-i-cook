import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../models/Recipe';
import { JSONRecipeFormat } from '../../models/JSONRecipeFormat';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-grid',
  templateUrl: './recipe-grid.component.html',
  styleUrls: ['./recipe-grid.component.css']
})

export class RecipeGridComponent implements OnInit {
  @Input() ingredientsToBeFiltered: string[];
  private recipeGrid:Recipe[];
  private viewLimit = 6;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  searchRecipes(ingredientsList:string[]) {
    this.ingredientsToBeFiltered = ingredientsList;

    //reset the result pages
    this.recipeService.resetPage();

    /*
    //RIGHT WAY TO DO IT!
    //check the following link for details on why I'm doing (data as any):
    // https://angular.io/guide/http
    this.recipeService.getRecipes(ingredientsList)
                      .subscribe( data => {
                          this.recipeGrid = (data as any).recipes;
    });
    */


    //placeholder function!
    //this.recipeGrid = this.recipeService.getRecipesPlaceholder(ingredients);
    this.recipeService.getRecipesPlaceholder(ingredientsList)
                      .subscribe( data => {
                          this.recipeGrid = (data as any).recipes;
    });
  }

  loadMore() {
    if (this.viewLimit%30 == 0 ) {
      this.recipeService.loadMore()
                        .subscribe( data => {
                            this.recipeGrid = this.recipeGrid.concat((data as any).recipes);
      });
    }
    
    this.viewLimit += 6;
  }

}
