
/*---------------------------- Variables (state) ----------------------------*/

const gameState = {
    gridSize: 10,
    score: null,
    highScore: null,
    snake: [], // Starting position of the snake
    food: {}, // Initially empty, will be set later
    direction: {}, // Initial direction (no movement)

}

/*------------------------ Cached Element References ------------------------*/

const rows = document.querySelectorAll('.board .row'); // Select all rows in the board

console.log(rows)

/*-------------------------------- Functions --------------------------------*/

const init = () => {



    gameState.gridSize = 10;
    gameState.score = 0;
    gameState.highScore = 0;
    gameState.snake = [{ row: 5, col: 5 }]; // Starting position of the snake
    gameState.food = {}; // empty till place food runs
    gameState.direction = { x: 0, y: 0 }; // Initial direction (no movement)

    placeFood(); // Place food on the board
    updateScoreDisplay();
    updateHighScoreDisplay()
    setInterval(() => {
        moveSnake(); // Move snake every 200ms
    }, 200);


    renderBoard();


}


const placeFood = () => {
    let randomRow = Math.floor(Math.random() * gameState.gridSize);
    console.log(randomRow)
    let randomCol = Math.floor(Math.random() * gameState.gridSize);
    gameState.food = { row: randomRow, col: randomCol }; // new food position
    console.log(gameState.food)

}



const renderBoard = () => {
    rows.forEach((row) => {
        row.querySelectorAll('.column').forEach(column => {
            column.classList.remove('snake'); // Clear
            column.classList.remove('food'); // Clear
        });
    });

    // Render the snake
    gameState.snake.forEach(segment => {
        const snakeCell = rows[segment.row].children[segment.col];
        snakeCell.classList.add('snake'); // Add a class to style the snake

        console.log(gameState.snake)
    });

    // Render the food
    const foodPosition = gameState.food
    console.log(foodPosition)
    const foodCell = rows[foodPosition.row].children[foodPosition.col]; // Get the specific cell
    foodCell.classList.add('food'); // Add a class to style the food
}


const moveSnake = () => {
    const head = gameState.snake[0];
    const newHead = {
        row: head.row + gameState.direction.y,
        col: head.col + gameState.direction.x,
    };


    //check for food collision
    if (checkForFoodCollision(newHead)) {
        gameState.score += 1
        if (gameState.score > gameState.highScore) {
            gameState.highScore = gameState.score; // Update high score
            updateHighScoreDisplay() // Update the displayed high score
        }
        placeFood()
        updateScoreDisplay()
    } else {
        gameState.snake.pop()
    }

    gameState.snake.unshift(newHead) // add newhead

    if (checkForWallCollision(newHead) || checkForSelfCollision(newHead)) {
        gameOver(); // Handle game over
    }



    renderBoard();

};

// food collision

const checkForFoodCollision = (head) => {
    return head.row === gameState.food.row && head.col === gameState.food.col;
};

// /Self collision

const checkForSelfCollision = (head) => {
    return gameState.snake.slice(1).some(segment => segment.row === head.row && segment.col === head.col)

};


//Wall collision
const checkForWallCollision = (head) => {
    return head.row < 0 || head.row >= gameState.gridSize || head.col < 0 || head.col >= gameState.gridSize;
};



const updateScoreDisplay = () => {
    document.querySelector('.score').innerText = `Score: ${gameState.score}`;

};

const updateHighScoreDisplay = () => {
    document.querySelector('.high-score').innerText = `High-Score: ${gameState.highScore}`;
};





const gameOver = () => {
    showGameOverMessage(); // Show game over message
    clearInterval(gameInterval)
    resetGame(); // Call reset game function
};

const resetGame = () => {
    gameState.snake = [{ row: 5, col: 5 }];
    gameState.score = 0;
    gameState.direction = { x: 0, y: 0 };
    placeFood();
    renderBoard();
    updateScoreDisplay();
    hideGameOverMessage();


}

const showGameOverMessage = () => {
    const messageEl = document.querySelector('.game-over-message');
    const messageTitleEl = document.querySelector('.message-title');
    const finalScoreEl = document.querySelector('.final-score');

    messageTitleEl.textContent = 'Game Over!';
    finalScoreEl.textContent = `Your Score: ${gameState.score} - High Score: ${gameState.highScore}`

    messageEl.style.display = 'block'; // Show the message

    renderBoard();

};

const hideGameOverMessage = () => {
    document.querySelector('.game-over-message').style.display = 'none';
};






/*----------------------------- Event Listeners -----------------------------*/

// init()


document.addEventListener('keydown', (e) => {
    console.log(e)
    switch (e.key) {
        case 'ArrowUp':
            if (gameState.direction.y === 0 ) {
                gameState.direction = {x: 0, y: -1}
            }
            break
        case 'ArrowDown':
            if (gameState.direction.y === 0 ) {
                gameState.direction = {x: 0, y: 1}
            }
            break
        case 'ArrowLeft':
            if (gameState.direction.x === 0 ) {
                    gameState.direction = {x: -1, y: 0}
            }
            break
        case 'ArrowRight':
            if (gameState.direction.x === 0 ) {
                    gameState.direction = {x: 1, y: 0}
            }
            break
    }

})



document.querySelector('.play-again-button').addEventListener('click', (e) => {
    resetGame() // Restart the game
});
