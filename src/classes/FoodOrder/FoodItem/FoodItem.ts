import Ingredient from '../../Ingredient';

type FoodType = 'soup' | 'sandwich' | 'donut' | 'muffin';
export default class FoodItem {
   name: string;
   ingredients: Ingredient[];
   readonly foodType: FoodType;
   readonly isPlantBased: boolean;

   constructor(name: string, ingredients: Ingredient[], foodType: FoodType) {
      this.name = name;
      this.ingredients = ingredients;
      this.foodType = foodType;
      this.isPlantBased = this.checkIfPlantBased();
   }

   private checkIfPlantBased(): boolean {
      if (!this.ingredients.length) {
         return true;
      }

      const animalBasedIngredients = this.ingredients.filter(
         ingredient => !ingredient.isPlantBased
      );

      return !animalBasedIngredients.length ? true : false;
   }

   public listIngredients(): string {
      const ingredientNames = this.ingredients.map(ingredient => ingredient.name);
      return ingredientNames.join(', ');
   }

   public removeIngredient(
      ingredient: Ingredient
   ): 'Ingredient removed.' | 'Ingredient not in food item.' {
      if (!this.ingredients.includes(ingredient)) {
         return 'Ingredient not in food item.';
      }

      this.ingredients = this.ingredients.filter(soupIngredient => soupIngredient !== ingredient);
      return 'Ingredient removed.';
   }
}
