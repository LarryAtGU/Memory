import { Game } from "./Game";

test("initializes correct number of cards", () => {
  const game = new Game(4);
  game.initialize();
  expect(game.cards.length).toBe(16);
});

test("shuffles cards", () => {
  const game = new Game(4);
  game.initialize();
  const firstOrder = game.cards.map((c) => c.pairId);
  game.initialize();
  const secondOrder = game.cards.map((c) => c.pairId);
  expect(firstOrder).not.toEqual(secondOrder);
});
