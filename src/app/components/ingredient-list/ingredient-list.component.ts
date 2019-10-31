import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})

export class IngredientListComponent implements OnInit {
  private isHidden:boolean = false;
  private ingredientList:string[] = [];
  private filteredIngredientList:string[] = [];

  @Input() recipeId: string;
  @Input() ingredientsToBeFiltered: string[] = [];

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.getIngredients();
  }

  onClick() {
    this.isHidden = !this.isHidden;
  }

  getIngredients() {
    /*
    //RIGHT WAY TO DO IT!
    //check the following link for details on why I'm doing (data as any):
    // https://angular.io/guide/http
    this.recipeService.getIngredients(this.recipeId)
                      .subscribe( data => {
                          this.ingredientList = (data as any).recipe.ingredients;
                          this.filteredIngredientList = this.ingredientList;
                          //filtering the ingredients the user already have
                          for (let target of this.ingredientsToBeFiltered) {
                            this.filteredIngredientList = this.ingredientList.filter(function(value, index, arr) {
                              return !value.includes(target);
                            });
                          }
    });
    */


    //placeholder function!
    //this.ingredientList = this.recipeService.getIngredientsPlaceholder(this.recipeId).ingredients;
    this.recipeService.getIngredientsPlaceholder(this.recipeId)
                      .subscribe( data => {
                          this.ingredientList = (data as any).recipe.ingredients;
                          this.filteredIngredientList = this.ingredientList;
                          //filtering the ingredients the user already have
                          for (let target of this.ingredientsToBeFiltered) {
                            this.filteredIngredientList = this.filteredIngredientList.filter(function(value, index, arr) {
                              return !value.includes(target);
                            });
                          }
    });

  }

}
