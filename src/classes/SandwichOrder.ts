import Sandwich from './Sandwich';

type Sizes = 'sm' | 'lg';

const prices: { sm: number; lg: number } = { sm: 5.99, lg: 9.99 };

export default class SandwichOrder extends Sandwich {
   size: Sizes;
   price: number;

   constructor(sandwich: Sandwich, size: Sizes) {
      super(sandwich.name, sandwich.ingredients);
      this.size = size;
      this.price = this.getPrice();
   }

   getPrice() {
      return prices[this.size];
   }
}
