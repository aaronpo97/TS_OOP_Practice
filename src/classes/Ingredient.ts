export default class Ingredient {
   readonly name: string;
   readonly isPlantBased: boolean;

   constructor(name: string, isPlantBased: boolean) {
      this.name = name;
      this.isPlantBased = isPlantBased;
   }
}
