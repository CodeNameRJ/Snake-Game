## Project Choice 

- Snake Game

## Project Description

My app is called The Snake Game. It's a simple game for players who want to control a growing snake and collect food to score points. The player navigates the snake around the grid using arrow keys to eat food, which increases the length of the snake and the overall score. The game ends if the snake runs into itself or hits the boundary of the grid. Players will have the option to restart and try to beat their high score. In the future, I'd like to add additional features such as different difficulty levels, unique grid layouts, and power-ups.


## User Stories

#### MVP Goals
- As a player, I want the game to automatically place new food on the board each time the snake eats one, so that the game continues seamlessly.

- As a player, I would like to control the snake using arrow keys or other simple controls so that I can easily move around the grid.

- As a player, I want the snake to grow in size each time it eats food so that there is progression and challenge.

- As a player, I want my game to recognize when the snake collides with itself or the wall so that I know the game is over.

- As a player, I want to see my current score so that I can track how well I’m doing during the game.

- As a player, I would like to restart the game after a game-over so that I can try again and improve my score.


### Psudo Code


// Define variables to store the position of the snake (array of coordinates)
// Define variables to store the direction of movement (e.g., 'up', 'down', 'left', 'right').
// Track the position of the food.
// Keep score and game status (e.g., `isGameOver`)

// Cache the board container element (e.g., `.board` class).
// Cache any elements displaying score or status


// Create an `init()` function to set up the initial state:
// Create the grid dynamically based on the specified grid size.
// Place the snake at the starting position.
// Randomly place the food on the board.
// Initialize the score and game status.


// Update the positions of the snake segments.
// Clear the previous positions of the snake.
// Draw the snake and food in their current positions on the board.
// Display the current score to the player.

// Set constants for:
// The size of the grid 10x10 cells
// The speed of the snake (`100ms` interval)
// Key codes (Arrow keys)

// Listen for arrow key presses
// Change the direction of the snake based on the key pressed
// Ensure the snake cannot reverse direction instantly (e.g., moving left while going right)


// Create an `updateSnake()` function to:
// Calculate the new head position based on the current direction.
// Check if the new position causes a collision (e.g., hitting walls or itself).
// Check if the snake eats the food, and if so:
// Grow the snake by adding a new segment
// Increase the score
// Reposition the food
// If no collision, move the snake forward by updating its segments

// Use `setInterval()` to call `updateSnake()` and `render()` at a consistent speed
// Check for game over and stop the loop if necessary

// Clear the board and remove any existing snake or food
// Reset all variables to their initial values
// Re-initialize the game state by calling `init()` again
