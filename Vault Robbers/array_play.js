const message = 'ciaonmdge';

let gridWidth = Math.sqrt(message.length);

let cipher = '';

for (let i = 0; i < gridWidth; i++) {
	for (let j = 0; j < message.length; j+=gridWidth) {
		cipher += message[i +j];
		//console.log(message[i +j]);
	}
	
}

console.log(cipher);