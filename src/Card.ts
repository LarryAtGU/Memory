export interface Card {
  id: number;
  pairId: number;
  state: "hidden" | "flipped" | "matched";
}
