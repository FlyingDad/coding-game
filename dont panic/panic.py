
import sys
import math

#dirextions
RIGHT = "RIGHT"
LEFT = "LEFT"
WAIT = "WAIT"
BLOCK = "BLOCK"

wait = 0

class Elevator:
    def __init__(self, floor, position):
        self.floor = floor
        self.position = position


class Floor:
    def __init__(self, num, elevator, exit):
        self.floor_num = num
        self.blocked = False
        self.elevator = elevator
        self.exit = exit

    # def __eq__(self, other):
    #     return self.floor_num == other.floor_num

    # def __lt__(self, other):
    #     return self.floor_num < other.floor_num

def is_clone_headed_correct_direction(exit_pos, clone_pos, clone_dir):
    print(f"def exit pos: {exit_pos} - clone-pos: {clone_pos} - clone dir: {clone_dir}", file=sys.stderr)
    if exit_pos < clone_pos and clone_dir == LEFT:
        return True
    elif exit_pos > clone_pos and clone_dir == RIGHT:
        return True
    else:
        return False

floors = []
# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

# nb_floors: number of floors
# width: width of the area
# nb_rounds: maximum number of rounds
# exit_floor: floor on which the exit is found
# exit_pos: position of the exit on its floor
# nb_total_clones: number of generated clones
# nb_additional_elevators: ignore (always zero)
# nb_elevators: number of elevators
nb_floors, width, nb_rounds, exit_floor, exit_pos, nb_total_clones, nb_additional_elevators, nb_elevators = [int(i) for i in input().split()]

for i in range(nb_elevators):
    # elevator_floor: floor on which this elevator is found
    # elevator_pos: position of the elevator on its floor
    elevator_floor, elevator_pos = [int(j) for j in input().split()]
    print(elevator_floor, file=sys.stderr)
    elev = Elevator(elevator_floor, elevator_pos)
    floor = Floor(elevator_floor, elev, 0)
    floors.append(floor)

floors.sort(key=lambda x: x.floor_num)

#create exit floor 
elev = Elevator(0, 0) # null elevator
floor = Floor(0, elev, exit_pos)
floors.append(floor)

# for i in range(len(sorted_floors)):
#     print(f"Floor #{i}: elev floor - {str(sorted_floors[i].elevator.floor)} - pos: {str(sorted_floors[i].elevator.position)}", file=sys.stderr)

# debug
for i in range(len(floors)):
    print(f"Floor #{i}: elev floor - {str(floors[i].elevator.floor)} - pos: {str(floors[i].elevator.position)}", file=sys.stderr)
print(f"num floors : {nb_floors}", file=sys.stderr)
print(f"width      : {width}", file=sys.stderr)
print(f"rounds     : {nb_rounds}", file=sys.stderr)
print(f"exit floor : {exit_floor}", file=sys.stderr)
print(f"exit pos   : {exit_pos}", file=sys.stderr)
print(f"num clones : {nb_total_clones}", file=sys.stderr)
print(f"num elev   : {nb_elevators}", file=sys.stderr)
###


# game loop
while True:
    # leading clone not blocked
    # clone_floor: floor of the leading clone
    # clone_pos: position of the leading clone on its floor
    # direction: direction of the leading clone: LEFT or RIGHT
    clone_floor, clone_pos, clone_direction = input().split()
    clone_floor = int(clone_floor)
    clone_pos = int(clone_pos)

    #debug
    print(f"clone pos: {clone_pos} - dir: {clone_direction}", file=sys.stderr)
    ###

    # Write an action using print
    # To debug: print("Debug messages...", file=sys.stderr)

    # action: WAIT or BLOCK

    # on exit floor

    if clone_direction != "NONE":
        if clone_floor == (nb_floors - 1): # on exit floor
            if is_clone_headed_correct_direction(exit_pos, clone_pos, clone_direction): 
                wait = 0
                print(WAIT)
            else:
                if wait == 0:
                    wait += 1
                    print(WAIT)
                else:
                    wait = 0
                    print(BLOCK)
    
        else: # not on exit floor, send to elevator
            print(f"not on exit floor, wait={wait}", file=sys.stderr)
            print(f"headed correct direction? {is_clone_headed_correct_direction(floors[clone_floor].elevator.position, clone_pos, clone_direction)},  {floors[clone_floor].elevator.position}", file=sys.stderr)
            if is_clone_headed_correct_direction(floors[clone_floor].elevator.position, clone_pos, clone_direction):
                print(f"headed correct direction", file=sys.stderr)
                wait = 0
                print(WAIT)
            else:
                if wait == 0:
                    wait += 1
                    print(WAIT)
                else:
                    wait = 0
                    print(BLOCK)
    else: 
        print(WAIT)


    # if clone_pos == 11:
    #     print("BLOCK")
    # else:
    #     print("WAIT")
