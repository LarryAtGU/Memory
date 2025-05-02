import $ from "jquery";
import "./styles.css";
import { Game } from "./Game";
// Initialize game
const game = new Game(4);
game.initialize();

function getTitle(flips: number) {
  let title: string;
  if (flips <= 24) return "Memory Master";
  if (flips <= 32) return "Flip Expert";
  if (flips <= 40) return "Card Challenger";
  return "Novice Matcher";
}

// Render function
function render(cards: any[]) {
  const $game = $("#game");
  $game.empty();
  cards.forEach((card) => {
    const $card = $("<div />")
      .addClass("card")
      .addClass(card.state)
      .text(
        card.state === "flipped" || card.state === "matched"
          ? card.pairId.toString()
          : ""
      )
      .on("click", () => handleCardClick(card.id));
    $game.append($card);
  });
}
function renderFlips(number: number) {
  const $flips = $("#flips");
  $flips.text(`Current flip numbers: ${number}.`);
}

function handleCardClick(cardId: number) {
  const prevFirst = game.firstCard;
  const updatedCards = game.flip(cardId);
  render(updatedCards);
  renderFlips(game.flips);
  if (
    prevFirst &&
    prevFirst.pairId !== updatedCards.find((c) => c.id === cardId)!.pairId
  ) {
    // Mismatch: re-render after flip-back delay
    setTimeout(() => {
      render(game.cards);
    }, 1000);
  }
  if (updatedCards.every((c) => c.state === "matched")) {
    const title = getTitle(game.flips);

    const message = `Congratulations! 
    
  You finished the game in ${game.flips} flips
and earned the title: ${title}

    Play again?`;
    setTimeout(() => {
      if (confirm(message)) {
        game.initialize();
        render(game.cards);
        renderFlips(game.flips);
      }
    }, 100);
  }
}

// Initial render using modern jQuery shorthand
$(() => {
  render(game.cards);
  renderFlips(game.flips);
});
