const BASE = 3;

let N = parseInt(readline());

	let remainder;
	let negative = false;

	if (N < 0) {
			negative = true;
			N = Math.abs(N);
	}

	let result = [];

	if (N === 0) {
			result.push(0);
	}

	while (N > 0) {
			remainder = N % 3;
			N = Math.floor(N / 3);
			// console.log(remainder,result)
			switch (remainder) {
					case 0:
							result.push(0);
							break;
					case 1:
							if (!negative) {
									result.push(1);
							} else {
									result.push('T');
							}
							break;
					case 2:
							N++;
							if (!negative) {
									result.push('T');
							} else {
									result.push(1);
							}
							break;
			}
	}

	print(result.reverse().join(''));
	