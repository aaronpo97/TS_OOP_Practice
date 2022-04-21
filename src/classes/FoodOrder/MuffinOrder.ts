import Muffin from './FoodItem/Muffin';
import FoodItemOrder from './FoodItemOrder';

export default class MuffinOrder extends FoodItemOrder {
   constructor(muffin: Muffin) {
      super(muffin, 3.49);
   }
}
