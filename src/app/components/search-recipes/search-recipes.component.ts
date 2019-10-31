import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.css']
})
export class SearchRecipesComponent implements OnInit {
  private ingredientsInput:string;
  private ingredients:string[];

  @Output() searchRecipes: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    //var formatedString = this.ingredientsInput.replace(/ /g, "%20");
    //this.searchRecipes.emit(formatedString);
    this.ingredients = this.ingredientsInput.split(',');
    this.ingredients = this.ingredients.filter(function(value, index, arr) {
      return value.length>0;
    });
    this.searchRecipes.emit(this.ingredients);
  }

}
