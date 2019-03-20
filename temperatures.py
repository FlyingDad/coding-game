import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.
temps = []


n = int(input())  # the number of temperatures to analyse
for i in input().split():
    # t: a temperature expressed as an integer ranging from -273 to 5526
    t = int(i)
    temps.append(t)

# To debug: print("Debug messages...", file=sys.stderr)
print(temps, file=sys.stderr)


def processTemps():
    lowestTemp = math.inf
    if len(temps) == 0:
        print(0)
        return

    for t in temps:
        # print(t)
        if abs(t) == abs(lowestTemp):
            lowestTemp = abs(t)
        elif abs(t) < abs(lowestTemp):
            lowestTemp = (t)
            # print(t, lowestTemp)
    print(lowestTemp)
    return



processTemps()
# Write a program that prints the temperature closest to 0 among input data. If two numbers are equally close to zero, positive integer has to be considered closest to zero (for instance, if the temperatures are -5 and 5, then display 5).

# Your program must read the data from the standard input and write the result on the standard output.
# Input
# Line 1: N, the number of temperatures to analyze

# Line 2: A string with the N temperatures expressed as integers ranging from -273 to 5526

# Output
# Display 0 (zero) if no temperatures are provided. Otherwise, display the temperature closest to 0.
# Constraints
# 0 ≤ N < 10000
