#Begin Imports
import sys
import math
#End Imports

#Begin Util Code
def log(x):
    print(x, file=sys.stderr)

class Player:
    def __init__(self):
        self.x = 0
        self.y = 0
        self.item = NONE
        self.order = ''
        self.item_num = 0 #the index of the order we are getting
        self.order_items = []
        self.serving = False

    def parse_order(self):
        self.order_items = self.order.split('-')

class Tile:
    def __init__(self, x, y, name):
        self.x = x
        self.y = y
        self.name = name
        self.item = None

    def parse_name(self):
        return self.name.split("-")

    def __repr__(self):
        return "Tile: " + str(self.x) + ", " + str(self.y)

class Customer:
    def __init__(self, item, points):
        self.item = item
        self.points = points


# Cells
BLUEBERRIES_CRATE = "B"
ICE_CREAM_CRATE = "I"
CHOPPED_STRAWBERRIES_CRATE = "S"
CHOPPING_BOARD = "C"
WINDOW = "W"
EMPTY_TABLE = "#"
DISHWASHER = "D"
FLOOR_CELL = "."

# Items
NONE = "NONE"
DISH = "DISH"
ICE_CREAM = "ICE_CREAM"
BLUEBERRIES = "BLUEBERRIES"
CHOPPED_STRAWBERRIES = "CHOPPED_STRAWBERRIES"

def enum_item_to_cell(item):
    if item == DISH:
        return DISHWASHER
    elif item == ICE_CREAM:
        return ICE_CREAM_CRATE
    elif item == BLUEBERRIES:
        return BLUEBERRIES_CRATE
    elif item == CHOPPED_STRAWBERRIES:
        return CHOPPING_BOARD
    elif item == EMPTY_TABLE:
        return EMPTY_TABLE
    else:
        print("Error enuming item to cell", file=sys.stderr) 
        pass

class Game:
    def __init__(self):
        self.player = Player()
        self.partner = Player()
        self.customers = []
        self.tiles = []

    def addTile(self, x, y, tileChar):
        if tileChar != '.':
            self.tiles.append(Tile(x, y, tileChar))

    def getTileByName(self, name):
        for t in self.tiles:
            if t.name == name:
                return t

        #If tile not found
        log("Error: Tile not found in function getTileByName")

    def getTileByItem(self, item):
        for t in self.tiles:
            if t.item == item:
                return t

        #If tile not found
        log("Error: Tile not found in function getTileByItem")
    

    def getTileByCoords(self, x, y):
        for t in self.tiles:
            if t.x == x and t.y == y:
                return t

        #If tile not found
        log("Error: Tile not found in function getTileByCoords")

    def updatePlayer(self, x, y, item):
        self.player.x = x
        self.player.y = y
        self.player.item = item

    def updatePartner(self, x, y, item):
        self.partner.x = x
        self.partner.y = y
        self.partner.item = item

    def use(self, tile):
        c = self.getTileByCoords(tile.x, tile.y)
        print("USE", tile.x, tile.y,f"; {c.name}")

    def move(self, tile):
        print("MOVE", tile.x, tile.y)


#End Util code

#Begin game code
game = Game()

# ALL CUSTOMERS INPUT: to ignore until bronze
num_all_customers = int(input())
for i in range(num_all_customers):
    # customer_item: the food the customer is waiting for
    # customer_award: the number of points awarded for delivering the food
    customer_item, customer_award = input().split()
    customer_award = int(customer_award)
    # print(f"{customer_item} - {customer_award}", file=sys.stderr)

# KITCHEN INPUT
for y in range(7):
    kitchen_line = input()
    for x, tileChar in enumerate(kitchen_line):
        game.addTile(x, y, tileChar)

# game loop
while True:

    turns_remaining = int(input())

    # PLAYERS INPUT
    #Gather and update player information
    player_x, player_y, player_item = input().split()
    player_x = int(player_x)
    player_y = int(player_y)
    game.updatePlayer(player_x, player_y, player_item)

    #debug
    print(f"Player has {player_item}", file=sys.stderr)

    #Gather and update partner information
    partner_x, partner_y, partner_item = input().split()
    partner_x = int(partner_x)
    partner_y = int(partner_y)
    game.updatePartner(partner_x, partner_y, partner_item)

    #Gather and update table information
    for t in game.tiles:
        t.item = None
    num_tables_with_items = int(input())  # the number of tables in the kitchen that currently hold an item
    for i in range(num_tables_with_items):
        table_x, table_y, item = input().split()
        table_x = int(table_x)
        table_y = int(table_y)
        print("table item " + item, file=sys.stderr)
        game.getTileByCoords(table_x, table_y).item = item

    # oven_contents: ignore until bronze league
    oven_contents, oven_timer = input().split()
    oven_timer = int(oven_timer)

    num_customers = int(input())  # the number of customers currently waiting for food
    for i in range(num_customers):
        customer_item, customer_award = input().split()
        customer_award = int(customer_award)
        customer = Customer(customer_item, customer_award)
        game.customers.append(customer)

    #debug
    # for c in game.customers:
    #     print(f"{c.item} {c.points}", file=sys.stderr)

    # get next customer
    #lets get the most recent cusomer (last in customer list)
    if not game.player.serving:
        print("Getting new order", file=sys.stderr)
        game.player.order = game.customers[len(game.customers) - 1].item
        game.player.serving = True
        game.player.parse_order()

    #debug 
    print(f"Preparing {game.player.order}", file=sys.stderr)
    # print(game.player.order_items, file=sys.stderr)


    # GAME LOGIC

    #check if we have item, if we do, incrment item_num
    if game.player.order_items[game.player.item_num] in game.player.item:
        game.player.item_num += 1

    #Gather plate 
    # Note: if getting strawberries, we need to set the plate down, get them, chop them, get plate get strawberries, window?

    #insert put plate down, get strawberries, chop strawberries, get new dish ...
    if game.player.order_items[game.player.item_num] == CHOPPED_STRAWBERRIES:
        game.player.order_items.insert(game.player.item_num, EMPTY_TABLE)
        game.player.order_items.insert(game.player.item_num + 1, CHOPPING_BOARD)
        

    if game.player.order_items[game.player.item_num] not in game.player.item:
        game.use(game.getTileByName(enum_item_to_cell(game.player.order_items[game.player.item_num])))


    # if DISH not in game.player.item:
    #     game.use(game.getTileByName(DISHWASHER))
    # elif ICE_CREAM not in game.player.item:
    #     game.use(game.getTileByName(ICE_CREAM_CRATE))
    # elif BLUEBERRIES not in game.player.item:
    #     game.use(game.getTileByName(BLUEBERRIES_CRATE))
    else:
        game.use(game.getTileByName(WINDOW))
    
    

#End game code