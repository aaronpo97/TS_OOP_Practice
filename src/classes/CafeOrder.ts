import DonutOrder from './FoodOrder/DonutOrder';
import MuffinOrder from './FoodOrder/MuffinOrder';
import SandwichOrder from './FoodOrder/SandwichOrder';
import SoupOrder from './FoodOrder/SoupOrder';

export default class CafeOrder {
   items: Array<SandwichOrder | SoupOrder | DonutOrder | MuffinOrder>;
   total: number;
   subtotal: number;
   tax: number;
   isPaidFor: boolean;

   constructor(items: Array<SandwichOrder | SoupOrder | DonutOrder | MuffinOrder>) {
      this.items = items;
      this.subtotal = this.getSubtotal();
      this.tax = 0.13;
      this.total = this.getTotal();
      this.isPaidFor = false;
   }

   private getSubtotal(): number {
      if (this.items.length === 0) {
         return 0;
      }

      return this.items.reduce((a, b) => a + b.price, 0);
   }

   private getTotal(): number {
      const taxAmount = Math.round(this.tax * this.subtotal * 100) / 100;
      return this.subtotal + taxAmount;
   }

   public getBill(): this {
      return this;
   }

   public payForOrder(moneyGiven: number): number {
      if (this.total > moneyGiven) {
         return moneyGiven;
      }

      this.isPaidFor = true;
      return Math.round((moneyGiven - this.total) * 100) / 100;
   }
}
