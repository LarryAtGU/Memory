# Memory Matching Card Game

A web-based Memory Matching Card Game implemented in TypeScript and jQuery, bundled with Webpack.

## What is the Memory Matching Card Game?

The Memory Matching Card Game (also called “Concentration”) challenges players to find matching pairs of cards in a grid. All cards start face-down. On each turn, the player flips two cards:

- If the cards match, they remain face-up (or are removed).
- If they do not match, they flip back face-down after a short delay.  
  The goal is to match all pairs in as few flips as possible.

## Download and Run Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/LarryAtGU/Memory.git
   cd memory-game
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Build the Project**

   ```bash
   npm run build
   ```

   This generates the bundled output in the `dist/` folder.

4. **Run in Development Mode**

   ```bash
   npm start
   ```

   This launches a local dev server, opens your browser, and reloads on code changes.

5. **Open in Browser**
   Navigate to `http://localhost:8080/` to play the game.

Enjoy testing your memory and have fun!
