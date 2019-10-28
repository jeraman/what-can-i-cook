import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/Recipe'
import { JSONRecipeFormat } from '../models/JSONRecipeFormat'
import keyConfig from '../../assets/js/keyConfig.json';

//declare const getKey:any;
//declare var config:any;

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  baseURL: string = "https://www.food2fork.com/api/search?";
  pageNumber: number = 1;
  sort: string = "r";

  constructor(private http:HttpClient) {
    //console.log(this.recipeURL);
  }

  formatSearchQueryWithIngredients(ingredients:string):string {
      return this.baseURL +
              "key=" + keyConfig.key +
              "&q=" + ingredients +
              "&page=" + this.pageNumber +
              "&sort=" + this.sort;
  }

  getRecipes(ingredients:string):Observable<JSONRecipeFormat[]> {
    var query = this.formatSearchQueryWithIngredients(ingredients);
    console.log("my query is: " + query);
    //return this.http.get<Recipe[]>(query));
    //return this.http.get<Recipe[]>(query)
    //                .map(result => <Recipe[]>result.recipes);
    return this.http.get<JSONRecipeFormat[]>(query);
  }

  getRecipesPlaceholder(ingredients:string):Recipe[] {
    return [
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
