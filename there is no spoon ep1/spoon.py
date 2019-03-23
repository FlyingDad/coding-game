import sys
import math

grid = []
nodeScan = [] #each cells scan result

def processNode(row, col):
    # print(f'coords {row} {y}', file=sys.stderr)
    node = grid[row][col]
    try:
        rightNode = int(grid[row][col + 1])
    except (IndexError):
        rightNode = -1
    try:
        bottomNode= int(grid[row + 1][col])
    except(IndexError):
        bottomNode= -1
    print(f"node {row},{col}: {node} - right: {rightNode} - bottom: {bottomNode}", file=sys.stderr)

    nodeScan.append(row)
    nodeScan.append(col)
    if(rightNode >= 0):
        nodeScan.append(rightNode[0])
        nodeScan.append(rightNode[1])
    else:
        nodeScan.append(-1) * 2
    if(bottomNode >= 0):
        nodeScan.append(bottomNode[0])
        nodeScan.append(bottomNode[1])
    else:
        nodeScan.append(-1) * 2


    print(nodeScan)

# Don't let the machines win. You are humanity's last hope...

width = int(input())  # the number of cells on the X axis
height = int(input())  # the number of cells on the Y axis
for i in range(height):
    line = input()  # width characters, each either 0 or .
    grid.append(list(line))
# Write an action using print
# To debug: print("Debug messages...", file=sys.stderr)


print("width: " + str(width) + "  height: " + str(height), file=sys.stderr)
print(grid, file=sys.stderr)

for row in range(width):
    for col in range(len(grid[row])):
        # print("grid coord: " + str(row) + ' ' + str(col),  file=sys.stderr)
        # c = (row, col)
        processNode(row, col)




# Three coordinates: a node, its right neighbor, its bottom neighbor
print("0 0 1 0 0 1")
print("0 1 -1 -1 -1 -1")
print("1 0 -1 -1 -1 -1")
