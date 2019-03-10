/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const numAllCustomers = parseInt(readline());
for (let i = 0; i < numAllCustomers; i++) {
    var inputs = readline().split(' ');
    const customerItem = inputs[0]; // the food the customer is waiting for
    const customerAward = parseInt(inputs[1]); // the number of points awarded for delivering the food
}
for (let i = 0; i < 7; i++) {
    const kitchenLine = readline();
}

// game loop
while (true) {
    const turnsRemaining = parseInt(readline());
    var inputs = readline().split(' ');
    const playerX = parseInt(inputs[0]);
    const playerY = parseInt(inputs[1]);
    const playerItem = inputs[2];
    var inputs = readline().split(' ');
    const partnerX = parseInt(inputs[0]);
    const partnerY = parseInt(inputs[1]);
    const partnerItem = inputs[2];
    const numTablesWithItems = parseInt(readline()); // the number of tables in the kitchen that currently hold an item
    for (let i = 0; i < numTablesWithItems; i++) {
        var inputs = readline().split(' ');
        const tableX = parseInt(inputs[0]);
        const tableY = parseInt(inputs[1]);
        const item = inputs[2];
    }
    var inputs = readline().split(' ');
    const ovenContents = inputs[0]; // ignore until wood 1 league
    const ovenTimer = parseInt(inputs[1]);
    const numCustomers = parseInt(readline()); // the number of customers currently waiting for food
    for (let i = 0; i < numCustomers; i++) {
        var inputs = readline().split(' ');
        const customerItem = inputs[0];
        const customerAward = parseInt(inputs[1]);
    }

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


    // MOVE x y
    // USE x y
    // WAIT
    console.log('WAIT');
}