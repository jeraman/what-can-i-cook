import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input() rating;
  fullStars:number[] = [];
  midStars:number[] = [];
  emptyStars:number[] = [];

  constructor() { }

  ngOnInit() {
    let resto = this.rating % 1.0;

    if (resto < 0.25)
      this.rating = this.rating-resto;
    if (resto > 0.75)
      this.rating = this.rating + (1-resto);

    //this.rating.toPrecision(3);

    let index = 1;
    for (; index <= this.rating; index = index+1)
      this.fullStars.push(0);
    if ((this.rating % 1) > 0) {
      this.midStars.push(0);
      index++;
    }
    for (; index <= 5; index = index+1)
      this.emptyStars.push(0);

      if (resto != 0) {
        console.log("resto: " + resto);
        console.log("this.rating: " + this.rating);
        console.log("fullStars" + this.fullStars.length);
        console.log("midStars" + this.midStars.length);
        console.log("emptyStars" + this.emptyStars.length);
      }
  }

}
