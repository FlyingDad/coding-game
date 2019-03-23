import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

width = int(input())  # length/width of room
# print(n, file=sys.stderr)
brightness = int(input())  # brightness
# print(l, file=sys.stderr)
# grid = []
lightCoords = []
lineCount = 0
for i in range(width):
    line = input()
    lineList = line.split(" ")
    print(lineList, file=sys.stderr)
    
    if "C" in lineList:
        lightIndex = lineList.index("C")
        # print("Found a light at " + str(lineCount) + ", " + str(lightIndex), file=sys.stderr)
        lightCoords = [lineCount, lightIndex]
        
    lineCount += 1

print("Found a light at " + str(lightCoords[0]) + ", " + str(lightCoords[1]), file=sys.stderr)

#get area of light box
lightArea = 1

# leftSpots = (lightCoords[1] - brightness) if (lightCoords[1] - brightness) >= 0 else 0
# # 5 - 1 + 3
# rightSpots = (width - (lightCoords[1] + brightness)) if (lightCoords[1] + brightness) <= width else 0
# topSpots = (lightCoords[0] - brightness) if (lightCoords[0] - brightness) >= 0 else 0
# bottomSpots = (width - (lightCoords[0] + brightness)) if (lightCoords[0] + brightness) >= 0 else 0

# print(leftSpots,file=sys.stderr)
# print(rightSpots,file=sys.stderr)
# print(topSpots,file=sys.stderr)
# print(bottomSpots,file=sys.stderr)

# hidingSpots = (leftSpots * width) + (rightSpots * width)
# # hidingSpots += topSpots + bottomSpots

# print(hidingSpots,file=sys.stderr)
# find light source coords
# for row in range(n):
#     for col in range(n):
#         # print(grid[row][col], file=sys.stderr)
#         if grid[row][col] == "C":
#             lightCoords.append([row, col])

# print(lightCoords, file=sys.stderr)
# Write an action using print
# To debug: print("Debug messages...", file=sys.stderr)
# print(grid, file=sys.stderr)
# print("Debug messages...", file=sys.stderr)
print("999")
