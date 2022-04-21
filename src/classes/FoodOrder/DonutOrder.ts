import Donut from './FoodItem/Donut';
import FoodItemOrder from './FoodItemOrder';

export default class DonutOrder extends FoodItemOrder {
   constructor(donut: Donut) {
      super(donut, 4.49);
   }
}
