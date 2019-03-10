// number of bingo cards
const n = parseInt(readline());

const Cards = new Array(n);

let singleBingo = 0;
let fullBingo = 0;

// fill bingo cards with numbers
for (let i = 0; i < n; i++) {
	let card = new Array(5).fill(new Array(5));
	for (let j = 0; j < 5; j++) {
		const row = readline();
		const line = row.split(' ');
		if (line[2] === '0') {
			line[2] = '*';
		}
		card[j] = line;
	}
	Cards[i] = card;
}

const calls = readline().split(' ');
// iterate through calls, placing a '*' for match
// then check each card for line and full bingo
let callCount = 0;
let lineBingoFound = false;

while (callCount < calls.length && fullBingo === 0) {
	checkForBingos();
	callCount++;
}

function checkForBingos() {
	let isLineBingo = false;
	let isDiagonalBingo = false;
	let isVerticalBingo = false;

	Cards.forEach(card => {
		markCard(card, calls[callCount]);
		if (!lineBingoFound) {
			isLineBingo = checkForLineBingo(card);
			printCard(card);
			if (isLineBingo) {
				singleBingo = callCount + 1;
				lineBingoFound = true;
			}
			isVerticalBingo = checkForVerticalBingo(card);
			if (isVerticalBingo) {
				singleBingo = callCount + 1;
				lineBingoFound = true;
			}
			isDiagonalBingo = checkForDiagonalBingo(card);
			if (isDiagonalBingo) {
				// printErr(callCount, card);
				singleBingo = callCount + 1;
				lineBingoFound = true;
			}
		}

		let isFullBingo = checkForBingo(card);
		if (isFullBingo) {
			fullBingo = callCount + 1;
		}
	});
}

function markCard(card, num) {
	card.forEach(line => {
		numExist = line.indexOf(num);
		if (numExist >= 0) {
			line[numExist] = '*';
			return;
		}
	});
	return;
}

function checkForLineBingo(card) {
	let bingo = false;
	for (let i = 0; i < 5; i++) {
		let checkForAllStar = card[i].filter(num => {
			return num > 0;
		});
		if (checkForAllStar.length === 0) {
			bingo = true;
			break;
		}
	}
	return bingo;
}

function checkForVerticalBingo(card) {
	let vBingoFound = false;
	for (let i = 0; i < 5; i++) {
		let vbingo = true;
		for (let j = 0; j < 5; j++) {
			if (card[j][i] != '*') {
				vbingo = false;
			}
		}
		if (vbingo === true) {
			vbingo = true;
			vBingoFound = true;
			break;
		}
	}
	return vBingoFound;
}

function checkForDiagonalBingo(card) {
	// right diagonal
	if (
		card[0][0] === '*' &&
		card[1][1] === '*' &&
		card[3][3] === '*' &&
		card[4][4] === '*'
	) {
		return true;
	} else if (
		card[0][4] === '*' &&
		card[1][3] === '*' &&
		card[3][1] === '*' &&
		card[4][0] === '*'
	) {
		return true;
	} else {
		return false;
	}
}

function checkForBingo(card) {
	let bingoCount = 0;
	for (let i = 0; i < 5; i++) {
		let checkForAllStar = card[i].filter(num => {
			return num > 0;
		});
		if (checkForAllStar.length === 0) {
			bingoCount++;
		}
	}
	return bingoCount === 5 ? true : false;
}

// debugging
function printCard(card) {
	card.forEach(line => {
		fullline = '';
		line.forEach(b => {
			if (b == '*') {
				fullline += '*  ';
			} else if (b < 10) {
				fullline += String(b) + '  ';
			} else {
				fullline += String(b) + ' ';
			}
		});
		printErr(fullline);
	});
	printErr('------');
}

print(singleBingo);
print(fullBingo);
