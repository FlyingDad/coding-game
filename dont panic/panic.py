import sys
import math

class Elevator:
    def __init__(self, floor, position):
        self.floor = floor
        self.position = position

elevators = []

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
    elev = Elevator(elevator_floor, elevator_pos)
    elevators.append(elev)

# debug
for i in range(len(elevators)):
    print(f"Elev floor: {elevators[i].floor} - pos: {elevators[i].position}", file=sys.stderr)
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
    clone_floor, clone_pos, direction = input().split()
    clone_floor = int(clone_floor)
    clone_pos = int(clone_pos)

    #debug
    print(f"clone pos: {clone_pos} - dir: {direction}", file=sys.stderr)
    ###

    # Write an action using print
    # To debug: print("Debug messages...", file=sys.stderr)

    # action: WAIT or BLOCK
    if clone_pos == 11:
        print("BLOCK")
    else:
        print("WAIT")
