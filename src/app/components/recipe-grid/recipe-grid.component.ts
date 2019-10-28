import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/Recipe';
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
    this.recipeGrid = this.recipeService.getRecipesPlaceholder(ingredients);
  }

}
