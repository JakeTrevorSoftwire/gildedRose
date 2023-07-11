import Item from "./Item";

export default class AgedItem extends Item {
  tick(): void {
    this.sellIn -= 1;
    this.appreciate();
    if (this.sellIn < 0) this.appreciate();
  }
}
