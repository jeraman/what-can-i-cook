import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/Recipe';
@Component({
  selector: 'app-recipe-grid',
  templateUrl: './recipe-grid.component.html',
  styleUrls: ['./recipe-grid.component.css']
})
export class RecipeGridComponent implements OnInit {
  recipeGrid:Recipe[];

  constructor() { }

  ngOnInit() {
    this.recipeGrid = [
      {
        "publisher": "BBC Food",
        "f2f_url": "http://food2fork.com/view/8c0314",
        "title": "Chicken and cashew nut stir-fry",
        "source_url": "http://www.bbc.co.uk/food/recipes/chickenandcashewnuts_89299",
        "recipe_id": "8c0314",
        "image_url": "http://static.food2fork.com/chickenandcashewnuts_89299_16x9986b.jpg",
        "social_rank": 95.91061636245128,
        "publisher_url": "http://www.bbc.co.uk/food"
      },
      {
        "publisher": "Jamie Oliver",
        "f2f_url": "http://food2fork.com/view/0beb06",
        "title": "Roasted chicken breast with pancetta, leeks & thyme",
        "source_url": "http://www.jamieoliver.com/recipes/chicken-recipes/roasted-chicken-breast-with-pancetta-leeks-and-thyme",
        "recipe_id": "0beb06",
        "image_url": "http://static.food2fork.com/466_1_1349094314_lrg2129.jpg",
        "social_rank": 94.88568903341375,
        "publisher_url": "http://www.jamieoliver.com"
      }
    ]
  }

}
