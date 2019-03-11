// Game parameters
const WIDTH = 11;
const HEIGHT = 7;

// Tile Types
const TABLE = '#';
const EMPTY = '.';
const ICE_CREAM_CRATE = 'I';
const BLUEBERRY_CRATE = 'B';
const DISH_WASHER = 'D';
const WINDOW = 'W';

// Item Types
const NONE = 'NONE';
const DISH = 'DISH';
const BLUEBERRIES = 'BLUEBERRIES';
const ICE_CREAM = 'ICE_CREAM';

class ActionSteps {
	constructor() {
		this.gettingDish = false;
		this.gettingBlueBerries = false;
		this.haveBlueberries = false;
		this.gettingIceCream = false;
		this.haveIceCream = false;
		this.deliveryEnroute = false;
		this.itemDelivered = false;
		this.enrouteWindow = false;
	}
}

class Entity {
	constructor(x, y, type) {
		this.x = x;
		this.y = y;
		this.type = type;
	}
}

class Item extends Entity {
	constructor(x, y, type) {
		super(x, y, type);
	}
}

class Chef extends Entity {
	constructor(x, y, type) {
		super(x, y, type);
	}
}

class Cell {
	constructor(type, index) {
		this.type = type;
		this.index = index;
	}

	canWalkOnIt() {
		return this.type === EMPTY;
	}

	getPos() {
		return {
			x: this.index % WIDTH,
			y: Math.floor(this.index / WIDTH)
		};
	}
}

class Grid {
	constructor() {
		this.cells = [];
		this.items = [];
	}

	addRow(line) {
		for (let i = 0; i < line.length; i++) {
			this.cells.push(new Cell(line[i], this.cells.length));
		}
	}

	getCell(x, y) {
		return this.cells[x + WIDTH * y];
	}

	getCellFromType(type) {
		return this.cells.filter(cell => {
			return cell.type === type;
		})[0];
	}

	debug() {
		let row = ''
		let count = 0;
		this.cells.forEach(cell => {
			// let pos = cell.getPos();
			row += cell.type;
			count++;
			if(count == WIDTH){
				console.error(row);
				count = 0;
				row = ''
			}
			// console.error(`Cell X: ${pos.x} // Cell Y: ${pos.y}`);
			// console.error(`Cell Type: ${cell.type}`);
			// console.error(`-------------------------`);
		});
	}
}

class Customer {
	constructor(item, award) {
		this.items = item.split('-');
		this.award = award;
	}
}

class Game {
	constructor() {
		this.grid = new Grid();
		this.chefs = [new Chef(), new Chef()];
		this.customers = [];
	}
}

let GAME = new Game();
let PLAYER_STEPS = new ActionSteps();

// ALL CUSTOMERS INPUT: to ignore until Bronze
const numAllCustomers = parseInt(readline());
for (let i = 0; i < numAllCustomers; i++) {
	let inputs = readline().split(' ');
	const customerItem = inputs[0]; // the food the customer is waiting for
	const customerAward = parseInt(inputs[1]); // the number of points awarded for delivering the food
}

// KITCHEN INPUT
for (let i = 0; i < 7; i++) {
	const kitchenLine = readline();
	GAME.grid.addRow(kitchenLine);
}

// GAME_GRID.debug();

// game loop
while (true) {
	// Reset Items
	GAME.grid.items = [];
	// Reset customers
	GAME.customers = [];
	// Reset chefs
	GAME.chefs = [];

	const turnsRemaining = parseInt(readline());

	// PLAYERS INPUT
	let inputsPlayer = readline().split(' ');
	// console.error(inputsPlayer)
	const playerX = parseInt(inputsPlayer[0]);
	const playerY = parseInt(inputsPlayer[1]);
	const playerItem = inputsPlayer[2];

	console.error(playerItem);

	GAME.chefs[0] = new Chef(playerX, playerY, playerItem);

	let inputsPartner = readline().split(' ');
	const partnerX = parseInt(inputsPartner[0]);
	const partnerY = parseInt(inputsPartner[1]);
	const partnerItem = inputsPartner[2];
	GAME.chefs[1] = new Chef(partnerX, partnerY, partnerItem);
	const numTablesWithItems = parseInt(readline()); // the number of tables in the kitchen that currently hold an item
	for (let i = 0; i < numTablesWithItems; i++) {
		let inputs = readline().split(' ');
		const tableX = parseInt(inputs[0]);
		const tableY = parseInt(inputs[1]);
		const item = inputs[2];
		GAME.grid.items.push(new Item(tableX, tableY, item));
	}

	let inputs = readline().split(' ');
	const ovenContents = inputs[0]; // ignore until bronze league
	const ovenTimer = parseInt(inputs[1]);
	const numCustomers = parseInt(readline()); // the number of customers currently waiting for food

	// CURRENT CUSTOMERS INPUT
	for (let i = 0; i < numCustomers; i++) {
		let inputs = readline().split(' ');
		const customerItem = inputs[0];
		const customerAward = parseInt(inputs[1]);
		GAME.customers.push(new Customer(customerItem, customerAward));
		console.error(GAME.customers)
	}
	// GAME.grid.debug();

	// GAME LOGIC
    // fetch dish, then blueberries, then ice cream, then drop it at first empty table
	if(playerItem === NONE && !PLAYER_STEPS.deliveryEnroute){
		let dishwasher = GAME.grid.getCellFromType(DISH_WASHER).getPos();
		console.log(`USE ${dishwasher.x} ${dishwasher.y}; JS starter AI`)
	}
	else if(playerItem === DISH){
		let blueberries = GAME.grid.getCellFromType(BLUEBERRY_CRATE).getPos();
		console.log(`USE ${blueberries.x} ${blueberries.y}; JS starter AI`);
	}
	else if(playerItem === `${DISH}-${BLUEBERRIES}`){
		let iceCream = GAME.grid.getCellFromType(ICE_CREAM_CRATE).getPos();
		console.error('ice cream coords: ', iceCream.x, iceCream.y)
		console.log(`USE ${iceCream.x} ${iceCream.y}; JS starter AI`);
	}
	else if(playerItem === `${DISH}-${BLUEBERRIES}-${ICE_CREAM}`){
		let window = GAME.grid.getCellFromType(WINDOW).getPos();
		console.log(`USE ${window.x} ${window.y}; to window`);
		// let emptyTable = GAME.grid.getCellFromType(TABLE).getPos();
		// console.log(`USE ${emptyTable.x} ${emptyTable.y}; JS starter AI`);
		// PLAYER_STEPS.deliveryEnroute = true;
	}
	// else if(playerItem === NONE && PLAYER_STEPS.deliveryEnroute){
	// 	PLAYER_STEPS.deliveryEnroute = false;
	// 	let dishwasher = GAME.grid.getCellFromType(DISH_WASHER).getPos();
	// 	console.log(`USE ${dishwasher.x} ${dishwasher.y}; JS starter AI`)
	// }
	// GAME LOGIC
	// // fetch dish, then blueberries, then ice cream, then drop it at first empty table
	// if (playerItem === NONE) {
	// 	if(!PLAYER_STEPS.gettingDish){
	// 		let dishwasher = GAME.grid.getCellFromType(DISH_WASHER).getPos();
	// 		console.log(`USE ${dishwasher.x} ${dishwasher.y}; to dish`);
	// 		// PLAYER_STEPS.gettingDish = true;
	// 	} 
		
	// 	// else if (!PLAYER_STEPS.gettingIceCream){
	// 	// 	let iceCream = GAME.grid.getCellFromType(ICE_CREAM_CRATE).getPos();
	// 	// 	console.log(`USE ${iceCream.x} ${iceCream.y}; get iceCream`);
	// 	// 	PLAYER_STEPS.gettingIceCream = true;
	// 	// }
	// 	// else if(PLAYER_STEPS.deliveryEnroute) {
	// 	// 	let emptyTable = GAME.grid.getCellFromType(TABLE).getPos();
	// 	// 	console.log(`USE ${emptyTable.x} ${emptyTable.y}; to table`);
	// 	// }

	// 	// delivery completed, go to window
	// 	else if (PLAYER_STEPS.deliveryEnroute){
	// 		PLAYER_STEPS.itemDelivered = true;
	// 		let window = GAME.grid.getCellFromType(WINDOW).getPos();
	// 		console.log(`USE ${window.x} ${window.y}; to window`);
	// 	} else {
	// 		console.log(`WAIT; error in player item = none`);
	// 	}
	// } else if (playerItem = DISH) {
	// 	//
	// 	// if (playerItem!= !PLAYER_STEPS.gettingBlueBerries){
	// 		let blueberries = GAME.grid.getCellFromType(BLUEBERRY_CRATE).getPos();
	// 		console.log(`USE ${blueberries.x} ${blueberries.y}; get blueberries`);
	// 		PLAYER_STEPS.gettingBlueBerries = true;
	// 	// }
	// 	// else if(PLAYER_STEPS.gettingBlueBerries && !PLAYER_STEPS.haveBlueberries){
	// 	// 	let blueberries = GAME.grid.getCellFromType(BLUEBERRY_CRATE).getPos();
	// 	// 	console.log(`USE ${blueberries.x} ${blueberries.y}; get blueberries`);
	// 	// }
	// 	// else if(PLAYER_STEPS.haveBlueberries && PLAYER_STEPS) {
	// 	// 	if(!PLAYER_STEPS.haveBlueberries) {

	// 	// 	}
	// 	// }
	// } else if (playerItem = BLUEBERRIES) {
	// 	let iceCream = GAME.grid.getCellFromType(BLUEBERRY_CRATE).getPos();
	// 	console.log(`USE ${iceCream.x} ${iceCream.y}; get iceCream`);
	// 	PLAYER_STEPS.gettingIceCream = true;
	// }
	// else if (playerItem === ICE_CREAM){
	// 	let emptyTable = GAME.grid.getCellFromType(TABLE).getPos();
	// 	console.log(`USE ${emptyTable.x} ${emptyTable.y}; to table`);
	// 	// let window = GAME.grid.getCellFromType(WINDOW).getPos();
	// 	// console.log(`USE ${window.x} ${window.y}; to window`);
	// }
}
