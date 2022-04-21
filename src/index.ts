import * as ingredients from './ingredients';

import Ingredient from './classes/Ingredient';
import logger from './util/logger';
import SandwichOrder from './classes/FoodOrder/SandwichOrder';
import SoupOrder from './classes/FoodOrder/SoupOrder';
import Soup from './classes/FoodOrder/FoodItem/Soup';
import Sandwich from './classes/FoodOrder/FoodItem/Sandwich';
import CafeOrder from './classes/CafeOrder';
import Muffin from './classes/FoodOrder/FoodItem/Muffin';
import MuffinOrder from './classes/FoodOrder/MuffinOrder';
import DonutOrder from './classes/FoodOrder/DonutOrder';

type IngredientList = Ingredient[];

const chickenNoodleSoupIngredients: IngredientList = [
   ingredients.chickenBroth,
   ingredients.chickenMeat,
   ingredients.noodles,
   ingredients.carrots,
   ingredients.celery,
   ingredients.redOnion,
   ingredients.salt,
   ingredients.pepper,
];

const veggieSandwichIngredients: IngredientList = [
   ingredients.pesto,
   ingredients.sundriedTomatoes,
   ingredients.marinatedArtichokes,
   ingredients.roastedRedPeppers,
   ingredients.redOnion,
   ingredients.basil,
   ingredients.salt,
   ingredients.pepper,
];

const blueberryMuffinIngredients: IngredientList = [
   ingredients.butter,
   ingredients.blueberries,
   ingredients.egg,
   ingredients.flour,
];

const chickenNoodleSoup = new Soup('Chicken noodle soup', chickenNoodleSoupIngredients);
const vegetableSandwich = new Sandwich('Vegetable sandwich', veggieSandwichIngredients);
const blueberryMuffin = new Muffin('Blueberry muffin', blueberryMuffinIngredients);

const myOrder = new CafeOrder([
   new SoupOrder(chickenNoodleSoup, 'sm'),
   new SoupOrder(chickenNoodleSoup, 'lg'),
   new SandwichOrder(vegetableSandwich, 'sm'),
   new MuffinOrder(blueberryMuffin),
   new DonutOrder(chickenNoodleSoup),
]);

console.log(myOrder.getBill());
const change = myOrder.payForOrder(50);

console.log({ change, isPaidFor: myOrder.isPaidFor });
