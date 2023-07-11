import Item from "./Item";

export default class ConjuredItem extends Item {
  depreciate(): void {
    if (this.quality > 0) this.quality -= 2;
  }
}
