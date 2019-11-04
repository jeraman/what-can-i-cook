# Backend
One critical question is where to find the recipes database. Some possible options are:

- [Allrecipes REST API](https://apps.allrecipes.com/): While this seems hosted inside AllRecipes servers, I wasn't able to find further info on how to use this;
- [API BigOven](https://api.bigoven.com/): A paid REST API. Won't work for me;
- [python-allrecipes](https://api.bigoven.com/): A webcrawler-based solution;
- [Food2Fork](https://www.food2fork.com/about/api): A REST API that is free for educational purposes, gathering recipes from several different sources. Perfect! Free queries are limited to 50/day.

## Food2Fork
After signing up for a free account, I started experimenting with the API. The API is very straightforward. For example, this is how you query recipes based on chicken and tomatoes:
```
https://www.food2fork.com/api/search?key=YOUR_API_KEY&q=chicken%20tomatoes&page=2&sort=r
```
The JSON result is something like (only two results are presented):
```JSON
{
  "count": 2,
  "recipes": [
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
```

Each query returns 30 results maximum. You also have two parameters to play around:
- `page=1`: Specify the results page (again, only 30 results are displayed per page);
- `sort=r`: Sort results by ratings.

Alternatively, one might want to get more details on  specific recipes (e.g., what ingredients are necessary for this particular recipe). In this case, you can do the following query:
```
https://www.food2fork.com/api/get?key=YOUR_API_KEY&rId=35382
```

Which results in a JSON object like:
```JSON
{
  "recipe": {
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
  }
}
```

And that's it! I'm good to go!


## Other things to check
One potentially useful information concerns the [hrecipe](http://microformats.org/wiki/hrecipe):

> The hRecipe microformat is designed for the mark-up of instructions for creating meals, drinks or food-based items.

I haven't explored yet how this could benefit my prototype. To be seen.
