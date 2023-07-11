export default class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  appreciate() {
    console.log("yes");
    if (this.quality < 50) this.quality += 1;
  }

  depreciate() {
    if (this.quality > 0) this.quality -= 1;
  }

  tick() {
    this.sellIn -= 1;
    this.depreciate();
    if (this.sellIn < 0) this.depreciate();
  }
}
