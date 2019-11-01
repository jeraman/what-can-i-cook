import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
//import {Component} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.css']
})

export class SearchRecipesComponent implements OnInit {
  //private ingredientsInput:string;
  private ingredients:string[] = [];
  private visible:boolean = true;
  private removable:boolean = true;
  private addOnBlur:boolean = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  @Output() searchRecipes: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    /*
    this.ingredients = this.ingredientsInput.split(',');
    this.ingredients = this.ingredients.filter(function(value, index, arr) {
      return value.trim().length>0;
    });
    */
    this.searchRecipes.emit(this.ingredients);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our ingredient
    if ((value || '').trim()) {
      this.ingredients.push(value.trim().toLowerCase());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(ingredient: string): void {
    const index = this.ingredients.indexOf(ingredient);
    if (index >= 0) {
      this.ingredients.splice(index, 1);
    }
  }
}
