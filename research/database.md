# Database
One critical question is where to find the recipes database. Some possible options are:

- [Allrecipes REST API](https://apps.allrecipes.com/): While this seems hosted inside AllRecipes servers, I wasn't able to find further info on how to use this;
- [API BigOven](http://api.bigoven.com/): A paid REST API. Won't work for me;
- [python-allrecipes](http://api.bigoven.com/): A webcrawler-based solution;
- [Food2Fork](https://www.food2fork.com/about/api): A REST API that is free for educational purposes that gathers recipes from several different sources. Perfect! Fee queries are limited to 50/day.

## Food2Fork
After signing up for a free account, I started experimenting with the API. The API is very straightforward. For example, this is how you query recipes based on chicken and tomatoes:
```
https://www.food2fork.com/api/search?key=YOUR_API_KEY&q=chicken%20tomatoes&page=2&sort=r
```
The JSON result is something like (here, I present only two results):
```
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

Queries will return 30 results by default and you need to use the REST parameters to navigate all results. The ones I used are:
- `page=1`: Specify the results page (again, only 30 results are displayed per page);
- `sort=r`: Sort results by ratings.

And that's it! I'm good to go!


## Other things to check
One potentially useful information concerns the [hrecipe](http://microformats.org/wiki/hrecipe):

> The hRecipe microformat is designed for the mark-up of instructions for creating meals, drinks or food-based items.

I haven't explored yet how this could benefit my prototype. To be seen.
