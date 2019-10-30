import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  private isHidden:boolean = false;
  private ingredientList:string[];
    /* example
    <p>2 jalapeno peppers, cut in half lengthwise and seeded,</p>
    <p>2 slices sour dough bread,</p>
    <p>1 tablespoon butter, room temperature,</p>
    <p>2 tablespoons cream cheese, room temperature,</p>
    <p>1/2 cup jack and cheddar cheese, shredded,</p>
    <p>1 tablespoon tortilla chips, crumbled</p>"
    */
  @Input() recipeId: string;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.getIngredients();
  }

  onClick() {
    this.isHidden = !this.isHidden;
  }

  getIngredients() {
    //RIGHT WAY TO DO IT!
    //check the following link for details on why I'm doing (data as any):
    // https://angular.io/guide/http
    this.recipeService.getIngredients(this.recipeId)
                      .subscribe( data => {
                          this.ingredientList = (data as any).recipe.ingredients;
    });


    //placeholder function!
    //this.recipeGrid = this.recipeService.getRecipesPlaceholder(ingredients);
  }
}
