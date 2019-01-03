// number of bingo cards
const n = parseInt(readline());

const Cards = new Array(n);

let singleBingo = 0;
let fullBingo = 0;

// fill bingo cards with numbers
for (let i = 0; i < n; i++) {
	let card = new Array(5).fill(new Array(5));
		for(let j = 0; j < 5; j++){
			const row = readline();
			const line = row.split(' ');
			card[j] = line;
			// printErr(card[j])
		}
	Cards[i] = card;
}
// printErr(Cards[4][4]);

const calls = readline().split(' ');
// printErr(calls);

// iterate through calls, placing a '*' for match
// then check each card for line and full bingo
let callCount = 0;

while (callCount < calls.length && fullBingo === 0){

	Cards.forEach(card => {
		markCard(card, calls[callCount]);
		let isLineBingo = checkForLineBingo(card);
		if(isLineBingo) {
			singleBingo = callCount;
		}
		let isFullBingo = checkForBingo(card);
		if(isFullBingo) {
			let fullBingo = callCount;
			function checkForLineBingo(card) {
				return true;
		}
	})
	callCount++;	
}

function markCard(card, num) {
	card.forEach(line => {
		numExist = line.indexOf(num);
		printErr('num: ', num, ' indexOf: ', numExist);
		if(numExist >= 0) {
			line[numExist] = '*';
			// printErr('line: ', line);
			return;
		}	
	})
	return;
}

function checkForLineBingo(card) {
	return true;
}

function checkForBingo(card) {
	return true;
}

print(singleBingo);
print(fullBingo);
