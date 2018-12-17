/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const R = parseInt(readline());
const V = parseInt(readline());

let vaults = [];  // array of vault times
let robbers = []; // array of robber objects

for (let i = 0; i < V; i++) {
    var inputs = readline().split(' ');
    const C = parseInt(inputs[0]);
    const N = parseInt(inputs[1]);
    
	
		vaults.push(calcSecondsForVault(C - N, N))
		
}
printErr('Robbers: '+ R +'  Vaults: ' + V );
printErr('vaults arr: ' + vaults);
function calcSecondsForVault(vowels, digits) {
    return (Math.pow(5, vowels)) * (Math.pow(10, digits));
}

//create robbers, assign each iniital vault time from vaul tthey are going to start on
for(let i = 0; i < R; i++){
	let newRobber = {
		id: i,
		vaultSolveTimer: vaults[i],
		done: false
	}
	robbers.push(newRobber)
}

let counter = 0;
let solvedVaults = 0;
let vaultIndex = R;
let availableRobbers = R

while(solvedVaults < V) {
	for(let i = 0; i < availableRobbers; i++){
		if(counter === robbers[i].vaultSolveTimer && robbers[i].done === false){
			printErr('\nrobber ' + robbers[i].id + ' solved a vault', counter, robbers[i].vaultSolveTimer)
			solvedVaults++;
			printErr('initial solved robber status---')
			printErr('solved vaults: ',solvedVaults)
			robbers.forEach(r => {
				printErr(r.id, r.done, r.vaultSolveTimer)
			})
			// if no more vaults set robber status to done
			//printErr(vaults.length - robbers.length)
			if(solvedVaults - 1>= (vaults.length - robbers.length)) {
				//printErr('--> setting robber done to true ', robbers[i].id)
				robbers[i].done = true;
				//printErr('--> result', robbers[i].done)
			} else {
				//get next vault and timer
				if(solvedVaults < vaults.length && robbers[i].done === false) {
					robbers[i].vaultSolveTimer += vaults[solvedVaults + 1];
				} else {
					robbers[i].done = true;
					printErr('robber done: ',robbers[i].id, robbers[i].vaultSolveTimer, robbers[i].vaultSolveTimer)
					availableRobbers--;
				}
			}
			printErr('\nfinal solved robber status---')
			robbers.forEach(r => {
				printErr(r.id, r.done, r.vaultSolveTimer)
			})
		printErr('\nsolved vaults: ',solvedVaults)
		}
	}
	counter++;
	//temp 
	// if(counter >= 1000) {
	// 	solvedVaults++;
	// 	counter = 0;
	// }
}
printErr('----- final Robber status ------')
robbers.forEach(r => {
	printErr(r.id, r.done, r.vaultSolveTimer)
})
printErr(counter)


// if(R/V === 1) {
//     print(Math.max(...vaults))
// } else {
//     print((Math.max(...vaults) * (R/V)));
// }

print(counter-1);