Card memory is a game where you have to click on a card to see what image is underneath it and try to find the matching image underneath the other cards.

## User Stories
- User can see a grid with n x n cards (n is an integer). All the cards are faced down initially (hidden state)
- User can click on any card to unveil the image that is underneath it (change it to visible state). The image will be displayed until the user clicks on a 2nd card

When the User clicks on the 2nd card:
- If there is a match, the 2 cards will be eliminated from the game (either hide/remove them or leave them in the visible state)
- If there isn't a match, the 2 cards will flip back to their original state (hidden state)
- When all the matches have been found, the User can see a dialog box showing a Congratulations message with a counter displaying the time it took to finish the game

### Check the [Typescript version](https://github.com/morantaf/card-memory-game-typescript)
