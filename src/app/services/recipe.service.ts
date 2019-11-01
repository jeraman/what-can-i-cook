import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/Recipe'
import { DetailedRecipe } from '../models/DetailedRecipe'
import { JSONRecipeFormat } from '../models/JSONRecipeFormat'
import { JSONDetailedRecipeFormat } from '../models/JSONDetailedRecipeFormat'

import keyConfig from '../../assets/js/keyConfig.json';

//declare const getKey:any;
//declare var config:any;

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  baseURL: string = "https://www.food2fork.com/api/";
  ingredientsList: string[];
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
            "&q=" + this.formatIngredientsString() +
            "&page=" + this.pageNumber +
            "&sort=" + this.sort;
  }

  formatIngredientsString():string {
    return (this.ingredientsList.join()).replace(/ /g, "%20");
  }

  setIngredients(ingredientsList:string[]) {
    this.ingredientsList = ingredientsList;
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
    //console.log("my query is: " + query);
    return this.http.get<JSONDetailedRecipeFormat[]>(query);
  }

  getIngredientsPlaceholder(recipeId:string):Observable<JSONDetailedRecipeFormat[]> {
    var query = this.formatSearchIngredients(recipeId);
    //console.log("my query is: " + query);
    //  query = "../../assets/placeholders/get-recipe-example.json";
    query = "https://raw.githubusercontent.com/jeraman/what-can-i-cook/master/src/assets/placeholders/get-recipe-example.json";
    //console.log("but we will use this placeholder instead:" + query);
    return this.http.get<JSONDetailedRecipeFormat[]>(query);
  }

  // get recipe methods
  getRecipes(ingredientList:string[]):Observable<JSONRecipeFormat[]> {
    this.setIngredients(ingredientList);
    var query = this.formatSearchByIngredients();
    //console.log("my query is: " + query);
    return this.http.get<JSONRecipeFormat[]>(query);
  }

  getRecipesPlaceholder(ingredientList:string[]):Observable<JSONRecipeFormat[]>  {
    this.setIngredients(ingredientList);
    var query = this.formatSearchByIngredients();
    //console.log("my query is: " + query);
    //query = "../../assets/placeholders/query-by-ingredients-example.json";
    query = "https://raw.githubusercontent.com/jeraman/what-can-i-cook/master/src/assets/placeholders/query-by-ingredients-example.json";
    //console.log("but we will use this placeholder instead:" + query);
    return this.http.get<JSONRecipeFormat[]>(query);
  }

  loadMore():Observable<JSONRecipeFormat[]> {
    this.incrementPage();
    var query = this.formatSearchByIngredients();
    //console.log("my query is: " + query);
    this.incrementPage();
    return this.http.get<JSONRecipeFormat[]>(query);
  }
}
