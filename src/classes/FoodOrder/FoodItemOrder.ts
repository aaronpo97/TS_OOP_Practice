import Donut from './FoodItem/Donut';
import Muffin from './FoodItem/Muffin';
import Sandwich from './FoodItem/Sandwich';

import Soup from './FoodItem/Soup';

type foodItems = Donut | Muffin | Sandwich | Soup;

export default class FoodItemOrder {
   foodItem: foodItems;
   price: number;

   constructor(foodItem: foodItems, price: number) {
      this.foodItem = foodItem;
      this.price = price;
   }
}
