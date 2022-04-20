import FoodItem from './FoodItem';
import Ingredient from './Ingredient';

export default class Soup extends FoodItem {
   constructor(name: string, ingredients: Ingredient[]) {
      super(name, ingredients, 'soup');
   }

   changeName(newName: string) {
      this.name = newName;
   }
}
