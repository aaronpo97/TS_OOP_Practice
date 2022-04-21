import FoodItem from './FoodItem';
import Ingredient from '../../Ingredient';

export default class Donut extends FoodItem {
   constructor(name: string, ingredients: Ingredient[]) {
      super(name, ingredients, 'donut');
   }
}
