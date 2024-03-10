/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function (foods, cuisines, ratings) {
  // ideas:
  // have a map called foodMap where foodMap[food] is the food object, containing the food's cuisine type and rating
  // have a map called cuisineMap where cuisineMap[cuisine] is an array of the food objects that are of the cuisine type,
  //    sorted by rating in descending order

  // to optimize:
  // instead of sorting, just keep track of highest rated food of each cuisine
  // only update the highest rated food when the highest rated food rating is decreased
  // or another food rating has increased to or above the current highest rated food

  this.foodMap = {};
  this.cuisineMap = {};
  for (let i = 0; i < foods.length; i++) {
    const foodObj = {
      food: foods[i],
      cuisine: cuisines[i],
      rating: ratings[i],
    };
    this.foodMap[foods[i]] = foodObj;
    if (!this.cuisineMap[cuisines[i]])
      this.cuisineMap[cuisines[i]] = { highest: null, arr: [] };
    this.cuisineMap[cuisines[i]].arr.push(foodObj);
    if (
      !this.cuisineMap[cuisines[i]].highest ||
      foodObj.rating > this.cuisineMap[cuisines[i]].highest.rating ||
      (foodObj.rating === this.cuisineMap[cuisines[i]].highest.rating &&
        foodObj.food < this.cuisineMap[cuisines[i]].highest.food)
    )
      this.cuisineMap[cuisines[i]].highest = foodObj;
  }
};

/**
 * @param {string} food
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function (food, newRating) {
  // helper function to update the highest rated food of a cuisine
  function updateHighest() {
    for (const foodObj of cuisineObj.arr) {
      if (
        foodObj.rating > cuisineObj.highest.rating ||
        (foodObj.rating === cuisineObj.highest.rating &&
          foodObj.food < cuisineObj.highest.food)
      )
        cuisineObj.highest = foodObj;
    }
  }

  const foodObj = this.foodMap[food];
  const cuisineObj = this.cuisineMap[foodObj.cuisine];
  // change highest rated food item if necessary
  // case1: the highest rated food rating is decreased
  // case2: food is not the highest rated food and food rating has increased to or above the current highest rated food
  if (
    (cuisineObj.highest.food === food &&
      newRating < cuisineObj.highest.rating) ||
    (cuisineObj.highest.food !== food && newRating >= cuisineObj.highest.rating)
  ) {
    foodObj.rating = newRating;
    updateHighest(food);
  } else {
    foodObj.rating = newRating;
  }
};

/**
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function (cuisine) {
  // retrieve in O(1) time
  return this.cuisineMap[cuisine].highest.food;
};

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */
