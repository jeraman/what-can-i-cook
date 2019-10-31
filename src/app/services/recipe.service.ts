import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/Recipe'
import { DetailedRecipe } from '../models/DetailedRecipe'
import { JSONRecipeFormat } from '../models/JSONRecipeFormat'
import keyConfig from '../../assets/js/keyConfig.json';

//declare const getKey:any;
//declare var config:any;

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  baseURL: string = "https://www.food2fork.com/api/";
  ingredientsQuery: string;
  pageNumber: number = 1;
  sort: string = "r";

  constructor(private http:HttpClient) {
    //console.log(this.recipeURL);
  }

  //getting one specific recipe
  //https://www.food2fork.com/api/get?key={YOUR_API_KEY}&rId=35382
  formatSearchIngredients(recipeId:string):string {
    return this.baseURL + "get?" +
            "key=" + keyConfig.key +
            "&rId=" + recipeId;
  }

  //querying by ingredients
  //https://www.food2fork.com/api/search?key={YOUR_API_KEY}&q=chicken%20breast&page=2
  formatSearchByIngredients():string {
    return this.baseURL + "search?" +
            "key=" + keyConfig.key +
            "&q=" + this.ingredientsQuery +
            "&page=" + this.pageNumber +
            "&sort=" + this.sort;
  }

  setIngredients(ingredientsQuery:string) {
    this.ingredientsQuery = ingredientsQuery;
  }

  resetPage() {
    this.pageNumber = 1;
  }

  incrementPage() {
    this.pageNumber = this.pageNumber+1;
  }

  // get ingredients methods
  getIngredients(recipeId:string):Observable<JSONDetailedRecipeFormat[]>  {
    var query = this.formatSearchIngredients(recipeId);
    console.log("my query is: " + query);
    return this.http.get<JSONDetailedRecipeFormat[]>(query);
  }

  // get ingredients methods
  getIngredientsPlaceholder(recipeId:string):Observable<JSONDetailedRecipeFormat[]> {
    var query = "../../assets/placeholders/get-recipe-example.json";
    console.log("my query is: " + query);
    return this.http.get<JSONDetailedRecipeFormat[]>(query);
    /*
    return {
        "publisher": "Closet Cooking",
        "f2f_url": "http://food2fork.com/view/35382",
        "ingredients": [
          "2 jalapeno peppers, cut in half lengthwise and seeded",
          "2 slices sour dough bread",
          "1 tablespoon butter, room temperature",
          "2 tablespoons cream cheese, room temperature",
          "1/2 cup jack and cheddar cheese, shredded",
          "1 tablespoon tortilla chips, crumbled\n"
        ],
        "source_url": "http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html",
        "recipe_id": "35382",
        "image_url": "http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg",
        "social_rank": 100,
        "publisher_url": "http://closetcooking.com",
        "title": "Jalapeno Popper Grilled Cheese Sandwich"

      };
      */
  }

  // get recipe methods
  getRecipes(ingredients:string):Observable<JSONRecipeFormat[]> {
    this.setIngredients(ingredients);
    var query = this.formatSearchByIngredients();
    console.log("my query is: " + query);
    return this.http.get<JSONRecipeFormat[]>(query);
  }

  loadMore():Observable<JSONRecipeFormat[]> {
    this.incrementPage();
    var query = this.formatSearchByIngredients();
    console.log("my query is: " + query);
    this.incrementPage();
    return this.http.get<JSONRecipeFormat[]>(query);
  }

  getRecipesPlaceholder(ingredients:string):Recipe[] {
    /*
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
    ];
    */
    var query = "../../assets/placeholders/query-by-ingredients-example.json";
    console.log("my query is: " + query);
    return this.http.get<JSONRecipeFormat[]>(query);
  }



}
