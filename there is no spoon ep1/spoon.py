import sys
import math

grid = []
nodeScan = ['0', '0'] #each cells scan result

def noNodeFound():
    nodeScan.append('-1')
    nodeScan.append('-1')

def processNode(row, col):

    #process row
    r = grid[row]
    remainingRow = r[col + 1:]       
    try: 
        index = remainingRow.index('0')
        nodeScan.append(str(index + col + 1))
        nodeScan.append(str(row))
    except ValueError:
        noNodeFound()

    print(f"Nodescan = {nodeScan}", file=sys.stderr)


    #process col

    c = []
    for node in range(1,height):
        c.append(grid[node][col])
    
    print(f"C = {c}", file=sys.stderr)
  
    try:
        index = c.index('0')
        print(f"0 found at {index}", file=sys.stderr)
        nodeScan.append('0')
        nodeScan.append(str(index + 1))
    except ValueError:
        print(f"0 not found", file=sys.stderr)
        noNodeFound()


    print(f"Nodescan = {nodeScan}", file=sys.stderr)

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

# for row in range(width):
#     for col in range(len(grid[row])):
        # print("grid coord: " + str(row) + ' ' + str(col),  file=sys.stderr)
        # c = (row, col)

processNode(0, 0)

print(' '.join(nodeScan))


# Three coordinates: a node, its right neighbor, its bottom neighbor
# print("0 0 1 0 0 1")
# print("0 1 -1 -1 -1 -1")
# print("1 0 -1 -1 -1 -1")
