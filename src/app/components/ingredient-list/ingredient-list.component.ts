import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})

export class IngredientListComponent implements OnInit {
  private isHidden:boolean = false;
  private ingredientList:string[] = [];
  private filteredIngredientList:string[] = [];

  @Input() recipeId: string;
  @Input() ingredientsToBeFiltered: string[] = [];
  @Input() title:string;
  @Input() url:string;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.getIngredients();
  }

  onClick() {
    this.isHidden = !this.isHidden;
  }

  getIngredients() {

    // getting real data
    this.recipeService.getIngredients(this.recipeId)
                      .subscribe( data => {
                          if ((data as any).error != undefined)
                            return;
                          this.ingredientList = (data as any).recipe.ingredients;
                          this.filteredIngredientList = this.ingredientList;
                          //filtering the ingredients the user already have
                          for (let target of this.ingredientsToBeFiltered) {
                            this.filteredIngredientList = this.filteredIngredientList.filter(function(value, index, arr) {
                              return !value.includes(target);
                            });
                          }
                        });

    //if there is a problem, alert user and use placeholder data instead
    if(this.ingredientList.length <= 0) {
      this.recipeService.getIngredientsPlaceholder(this.recipeId)
                        .subscribe( data => {
                            this.ingredientList = (data as any).recipe.ingredients;
                            this.filteredIngredientList = this.ingredientList;
                            //filtering the ingredients the user already have
                            for (let target of this.ingredientsToBeFiltered) {
                              this.filteredIngredientList = this.filteredIngredientList.filter(function(value, index, arr) {
                                return !value.includes(target);
                              });
                            }
                        });
    }
  }

  onShare() {
    let shareText = "Hey! Just found this nice recipe:%0a*" +
                    this.title + "*%0a" +
                    this.url +
                    "%0a%0aWe already have the following ingredients:%0a - " +
                    //this.ingredientsToBeFiltered.join().replace(/,/g, "%0a - ") + "%0a" +
                    this.ingredientsToBeFiltered.join("%0a - ");

    if (this.filteredIngredientList.length != 0) {
        shareText += "%0a%0aWe still need the following ingredients:%0a - " +
        //this.filteredIngredientList.join().replace(/,/g, "%0a - ") + "%0a" +
        this.filteredIngredientList.join("%0a - ");
    } else {
        shareText += "%0a%0aWe don't need any other ingredient!";
    }

    shareText += "%0a%0aShould we give it a try? ;)";

    open("whatsapp://send?text="+shareText, ' ');
  }

  onPrint() {
    let newWindow = window.open('', '_blank', 'top=0,left=0,height=100%,width=600,height=400');
    newWindow.document.open();
    newWindow.document.write(`
    <html>
        <head>
          <title>${this.title}</title>
          <style>
          </style>
        </head>
        <body>
        <h1>${this.title}</h1>
        Full recipe in: <br><a href="${this.url}">${this.url}</a>

        <h2>You already have:</h2>
        <ul><li>
        ${this.ingredientsToBeFiltered.join("</a></li><li>")}
        </li></ul>

        <h2>You need to buy:</h2>
        <ul><li>
        ${this.filteredIngredientList.join("</a></li><li>")}
        </li></ul>
        </body>
      </html>
    `);
    newWindow.print();
    newWindow.document.close();
    newWindow.onfocus=function(){ newWindow.close();}
  }

}
