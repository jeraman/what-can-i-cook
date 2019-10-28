import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  private isHidden:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isHidden = !this.isHidden;
  }
}
