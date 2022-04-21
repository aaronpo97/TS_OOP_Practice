import Sandwich from './FoodItem/Sandwich';
import FoodItemOrder from './FoodItemOrder';

type Sizes = 'sm' | 'lg';

const prices: { sm: number; lg: number } = { sm: 5.99, lg: 9.99 };

export default class SandwichOrder extends FoodItemOrder {
   size: Sizes;

   constructor(sandwich: Sandwich, size: Sizes) {
      super(sandwich, prices[size]);
      this.size = size;
   }
}
