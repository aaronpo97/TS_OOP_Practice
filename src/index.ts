import Soup from './classes/Soup';
import Ingredient from './classes/Ingredient';
import SoupOrder from './classes/SoupOrder';
import Sandwich from './classes/Sandwich';
import SandwichOrder from './classes/SandwichOrder';
import CafeOrder from './classes/CafeOrder';

type IngredientList = Ingredient[];

const chickenNoodleSoupIngredients: IngredientList = [
   new Ingredient('chicken broth', false),
   new Ingredient('chicken meat', false),
   new Ingredient('noodles', true),
   new Ingredient('carrots', true),
   new Ingredient('celery', true),
   new Ingredient('onion', true),
   new Ingredient('salt', true),
   new Ingredient('pepper', true),
];

const veggieSandwichIngredients: IngredientList = [
   new Ingredient('pesto', true),
   new Ingredient('sundried tomatoes', true),
   new Ingredient('marinated artichokes', true),
   new Ingredient('roasted red peppers', true),
   new Ingredient('basil', true),
];

const myOrder = new CafeOrder([
   new SoupOrder(new Soup('Chicken noodle soup', chickenNoodleSoupIngredients), 'md'),
   new SandwichOrder(new Sandwich('Vegetable sandwich', veggieSandwichIngredients), 'lg'),
]);

console.log(myOrder.getReciept());
