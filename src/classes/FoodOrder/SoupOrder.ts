import Soup from './FoodItem/Soup';
import FoodItemOrder from './FoodItemOrder';

type Sizes = 'sm' | 'md' | 'lg';

const prices = { sm: 4.99, md: 6.99, lg: 10.99 };
export default class SoupOrder extends FoodItemOrder {
   size: Sizes;

   constructor(soup: Soup, size: Sizes) {
      super(soup, prices[size]);
      this.size = size;
   }
}
