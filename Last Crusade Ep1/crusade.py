import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.
RIGHT = "RIGHT"
LEFT = "LEFT"
BOTTOM = "BOTTOM"
TOP = "TOP"

# room route mapping (entrances to exits)
NONE = "NONE"
TOP_BOTTOM = "TOP_BOTTOM"
RIGHT_BOTTOM = "RIGHT_BOTTOM"
LEFT_BOTTOM = "LEFT_BOTTOM"
LEFT_RIGHT = "LEFT_RIGHT"
RIGHT_LEFT = "RIGHT_LEFT"
TOP_LEFT = "TOP_LEFT"
RIGHT_BOTTOM = "RIGHT_BOTTOM"
TOP_RIGHT = "TOP_RIGHT"
LEFT_BOTTOM = "LEFT_BOTTOM"


class Room:
    def __init__(self, type, routes):
        self.type = type
        self.routes = routes
        
rooms = []
rooms.append(Room(0, [NONE]))
rooms.append(Room(1, [TOP_BOTTOM, LEFT_BOTTOM, RIGHT_BOTTOM]))
rooms.append(Room(2, [LEFT_RIGHT, RIGHT_LEFT]))
rooms.append(Room(3, [TOP_BOTTOM]))
rooms.append(Room(4, [TOP_LEFT, RIGHT_BOTTOM]))
rooms.append(Room(5, [TOP_RIGHT, LEFT_BOTTOM]))
rooms.append(Room(6, [LEFT_RIGHT, RIGHT_LEFT]))
rooms.append(Room(7, [TOP_BOTTOM, RIGHT_BOTTOM]))
rooms.append(Room(8, [LEFT_BOTTOM, RIGHT_BOTTOM]))
rooms.append(Room(9, [LEFT_BOTTOM, TOP_BOTTOM]))
rooms.append(Room(10, [TOP_LEFT]))
rooms.append(Room(11, [TOP_RIGHT]))
rooms.append(Room(12, [RIGHT_BOTTOM]))
rooms.append(Room(13, [LEFT_BOTTOM]))

# for room in rooms:
    # print(room.type, room.routes, file=sys.stderr)

# room_dict = {
#     0: NONE,
#     1: BOTTOM,
#     2: LEFT_AND_RIGHT,
#     3: BOTTOM,
#     4: BOTTOM,

# }
grid = []

# Grid
# w: number of columns.
# h: number of rows.
width, height = [int(i) for i in input().split()]

# Debug
for i in range(height):
    row = input()  # represents a line in the grid and contains W integers. Each integer represents one room of a given type.
    grid.append(row.split(' '))

exit_coord = int(input())  # the coordinate along the X axis of the exit (not useful for this first mission, but must be read).

#debug
# print(grid, file=sys.stderr)

def get_next_room(grid_location, exit):
    if exit == BOTTOM:
        return [grid_location[0], grid_location[1] + 1]
    elif exit == LEFT:
        return [grid_location[0] - 1, grid_location[1]]
    elif exit == RIGHT:
        return [grid_location[0] + 1, grid_location[1]]

def get_next_entrance(exit):
    if exit == BOTTOM:
        return TOP
    elif exit == LEFT:
        return RIGHT
    elif exit == RIGHT:
        return LEFT

def get_current_room(grid_location):
    return grid[grid_location[0]][grid_location[1]]

room_entrance = TOP

# game loop
while True:
    indy_x, indy_y, pos = input().split()
    indy_x = int(indy_x)
    indy_y = int(indy_y)

    # Write an action using print
    # To debug: print("Debug messages...", file=sys.stderr)
    indy_room_type = int(get_current_room([indy_y, indy_x]))
    # print(f"indy room type {indy_room_type} from grid {indy_x} {indy_y}", file=sys.stderr)
    for route in rooms[indy_room_type].routes:
        # print(route, file=sys.stderr)
        if room_entrance in route:
            exit = route.split('_')
            if exit[0] == room_entrance:
                # print(f'contains top with exit {exit[1]}', file=sys.stderr)
                next_room = get_next_room([indy_x, indy_y], exit[1])
                # print(f"this room exit: {exit[0]} {exit[1]}", file=sys.stderr)
                room_entrance = get_next_entrance(exit[1])
                # print(f"next room entrance: {room_entrance}", file=sys.stderr)
                print(f"{next_room[0]} {next_room[1]}")
                break
    # One line containing the X Y coordinates of the room in which you believe Indy will be on the next turn.
    # print("0 0")
