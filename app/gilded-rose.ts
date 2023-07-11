import { Item } from "./classes";

export default class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => item.tick());

    return this.items;
  }
}
