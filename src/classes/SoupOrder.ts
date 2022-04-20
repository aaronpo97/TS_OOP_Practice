import Soup from './Soup';

type Sizes = 'sm' | 'md' | 'lg';

const prices = { sm: 4.99, md: 6.99, lg: 10.99 };
export default class SoupOrder extends Soup {
   size: Sizes;
   price: number;

   constructor(soup: Soup, size: Sizes) {
      super(soup.name, soup.ingredients);
      this.size = size;
      this.price = this.getPrice();
   }

   getPrice(): number {
      return prices[this.size];
   }
}
