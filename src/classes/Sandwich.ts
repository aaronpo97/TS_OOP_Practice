import FoodItem from './FoodItem';
import Ingredient from './Ingredient';

export default class Sandwich extends FoodItem {
   constructor(name: string, ingredients: Ingredient[]) {
      super(name, ingredients, 'sandwich');
   }
}
