import Item from "./Item";

export default class TicketItem extends Item {
  tick(): void {
    this.sellIn -= 1;
    if (this.sellIn < 0) this.quality = 0;
    else {
      this.appreciate();
      if (this.sellIn < 10) this.appreciate();
      if (this.sellIn < 5) this.appreciate();
    }
  }
}
