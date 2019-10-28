import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.css']
})
export class SearchRecipesComponent implements OnInit {
  private ingredients:string;

  @Output() searchRecipes: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    var formatedString = this.ingredients.replace(/ /g, "%20");
    this.searchRecipes.emit(formatedString);
  }

}
