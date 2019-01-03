/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
const HIGH = "too high";
const LOW = "too low";
const RIGHT = "right on";

const ROUNDS = parseInt(readline());

function Response(params) {
	this.guess =  params.slice(0, 1),
	this.response = params.slice(2);
}

const RESPONSES = [];

for (let i = 0; i < ROUNDS; i++) {
		const line = readline();
		const round = new Response(line)
		RESPONSES.push(round)
}

RESPONSES.forEach(res => {
	printErr(res.guess + ' ' + res.response)
})

// Write an action using print()
// To debug: printErr('Debug messages...');

print('Alice cheated in round X');