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
  private displayedAPIErrorPopUp:boolean = false;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  searchRecipes(ingredientsList:string[]) {
    this.ingredientsToBeFiltered = ingredientsList;

    //reset the result pages
    this.recipeService.resetPage();

    // getting real data
    this.recipeService.getRecipes(ingredientsList)
                      .subscribe( data =>  {
                          if ((data as any).error != undefined)
                            return;
                          this.recipeGrid = (data as any).recipes;
                        });

    //if there is a problem, alert user and use placeholder data instead
    if(this.displayedAPIErrorPopUp || this.recipeGrid == undefined) {
      if (!this.displayedAPIErrorPopUp) {
        alert("The app has reached the 50-queries limit for the day.\n\nUsing placeholder data instead...");
        this.displayedAPIErrorPopUp = true;
      }
      this.recipeService.getRecipesPlaceholder(ingredientsList)
                        .subscribe( data => {
                            this.recipeGrid = (data as any).recipes;
                          });
    }
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
