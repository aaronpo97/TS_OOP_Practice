import SandwichOrder from './SandwichOrder';
import SoupOrder from './SoupOrder';

export default class CafeOrder {
   items: Array<SandwichOrder | SoupOrder>;
   total: number;
   subtotal: number;
   tax: number;

   constructor(items: Array<SandwichOrder | SoupOrder>) {
      this.items = items;
      this.subtotal = this.getSubtotal();
      this.tax = 0.13;
      this.total = this.getTotal();
   }

   getSubtotal(): number {
      if (this.items.length === 0) {
         return 0;
      }

      return this.items.reduce((a, b) => a + b.price, 0);
   }
   getTotal(): number {
      const taxAmount = Math.round(this.tax * this.subtotal * 100) / 100;
      return this.subtotal + taxAmount;
   }

   getReciept(): this {
      return this;
   }
}
