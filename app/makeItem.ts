import {
  AgedItem,
  ConjuredItem,
  Item,
  LegendaryItem,
  TicketItem,
} from "./classes";

export default function (name: string, sellIn: number, quality: number) {
  let args = [name, sellIn, quality] as const;
  if (name === "Sulfuras, Hand of Ragnaros") return new LegendaryItem(...args);

  if (name.startsWith("Aged")) return new AgedItem(...args);

  if (name.startsWith("Backstage passes")) return new TicketItem(...args);

  if (name.startsWith("Conjured")) return new ConjuredItem(...args);

  return new Item(...args);
}
