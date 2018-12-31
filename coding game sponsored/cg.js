const BLOCK = '#';//String.fromCharCode(9608);
const OPEN = '_';//String.fromCharCode(9617);
const UP = 'E';
const DOWN = 'A';
const LEFT = 'C';
const STOP = 'B';
const RIGHT = 'D';

const firstInitInput = parseInt(readline());
const secondInitInput = parseInt(readline());
const thirdInitInput = parseInt(readline());

printErr(firstInitInput, secondInitInput, thirdInitInput);

let lastMove = null;
// init game grid
// let cols = '.'.repeat(secondInitInput);
// let rows = 
const GAME_GRID = Array(secondInitInput).fill(' ').map(x => Array(firstInitInput).fill(' '))
//

// players object
function Player(col, row) {
	this.col = col,
	this.row = row
}
let PLAYERS = [];

// player (us) four direction status
// set surroundings on grid so we can make map
function surroundings(u, r, d, l) {
	GAME_GRID[PLAYERS[4].col][PLAYERS[4].row-1] = u;
	GAME_GRID[PLAYERS[4].col+1][PLAYERS[4].row] = r;
	GAME_GRID[PLAYERS[4].col][PLAYERS[4].row+1] = d;
	GAME_GRID[PLAYERS[4].col-1][PLAYERS[4].row] = l;
}

// game loop -----------------------------------------------------
while (true) {
	const firstInput = readline();
	const secondInput = readline();
	const thirdInput = readline();
	const fourthInput = readline();
	

	PLAYERS = [];
	for (let i = 0; i < thirdInitInput; i++) {
		var inputs = readline().split(' ');
		const fifthInput = parseInt(inputs[0]);
		const sixthInput = parseInt(inputs[1]);
		const newPlayer = new Player(fifthInput, sixthInput);
		PLAYERS.push(newPlayer);
		// set grid location for player as OPEN
		GAME_GRID[fifthInput][sixthInput] = OPEN;
		// printErr('5 - 6 ', fifthInput, sixthInput);
	}
	surroundings(firstInput, secondInput, thirdInput, fourthInput);
	
	// for debugging
	//showPlayerInfo()
	displayBoard();

	// Write an action using print()
	// To debug: printErr('Debug messages...');
	// printErr('1 - 4 ', firstInput, secondInput, thirdInput, fourthInput);
	// print('A, B, C, D or E');

	print(makeMove())
}
// end game loop ------------------------------------------------------

function makeMove() {
	printErr(GAME_GRID[PLAYERS[4].col][PLAYERS[4].row-1])

	//check and go left
	if (GAME_GRID[PLAYERS[4].col][PLAYERS[4].row-1] == OPEN) {
		lastMove = LEFT;
		return LEFT;
	} 
	// check and go up
	else if (GAME_GRID[PLAYERS[4].col-1][PLAYERS[4].row] == OPEN) {
		lastMove = UP;
		return UP;
	}
	// check and go down
	else if (GAME_GRID[PLAYERS[4].col][PLAYERS[4].row+1] == OPEN) {
		lastMove = DOWN;
		return DOWN
	}
	// check and go right
	else if (GAME_GRID[PLAYERS[4].col+1][PLAYERS[4].row] == OPEN) {
		lastMove = RIGHT;
		return RIGHT
	}
	
	else {
		return STOP;
	}

}



// DEBUG FUNCTIONS

// game board display
function displayBoard() {
	for(let col = 0; col < secondInitInput; col++){
		rowText = '';
		for(let row = 0; row < firstInitInput; row++){
			if(PLAYERS[4].row == row && PLAYERS[4].col == col) {
				rowText += 'P';
			} else if(checkForEnemy(col, row)==true) {
				rowText += 'E'
			} 
			else {
				rowText += GAME_GRID[col][row];
			}	
		}
		printErr(rowText);
	}
}

function checkForEnemy(col, row) {
	for(let i = 0; i < 4; i++){
		if(PLAYERS[i].col == col && PLAYERS[i].row == row){
			return true
		}
	}
	return false;
}

function showPlayerInfo(){
	PLAYERS.forEach(p => {
		printErr(p.col, p.row);
	})
}
// printErr(firstInitInput, secondInitInput, thirdInitInput);
// Initialization input
// Line 1: an integer.

// Line 2: an integer.

// Line 3: an integer.

// Input for one game turn
// Line 1: a character.

// Line 2: a character.

// Line 3: a character.

// Line 4: a character.

// Next few lines: two integers on each line.

// Output for one game turn
// A single line containing one of the following actions: A, B, C, D or E