import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../models/Recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  @Input() ingredientsToBeFiltered: string[];

  constructor() { }

  ngOnInit() {
  }
}
