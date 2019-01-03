/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());

// const N = 3;
const space = ' ';
const star = '*';

triForceTop(N);
triForceBottom(N);

// print('answer');


function triForceTop(n) {
	for(let i = 1; i <= N; i++){
		const R = (n * 2) - i;
		if(i === 1){
			console.log('.' + space.repeat(R-1) + star.repeat(i) + star.repeat(i-1));
		} else {
			console.log(space.repeat(R) + star.repeat(i) + star.repeat(i-1));
		}
		
	}
}

function triForceBottom(n) {
	for(let i = 1; i <= N; i++){
		// for(let j = 0; j < N; j++){
			const LSPACE = (n - i);
			const STAR_LEFT = space.repeat(LSPACE) + star.repeat(i) + star.repeat(i-1);
			const STAR_RIGHT = space.repeat(n*2-i*2+1) + star.repeat(i) + star.repeat(i-1);
			console.log(STAR_LEFT + STAR_RIGHT);
		// }
	}
}

