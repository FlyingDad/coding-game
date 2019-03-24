remainingRow = [1,2,3,4]

try: 
    index = remainingRow.index(1)
    # nodeScan.append(index + col + 1)
    # nodeScan.append(row)
    # print(f"Row = {r}, Slice = {remainingRow}, index= {index}", file=sys.stderr)
    # rightNode = int(grid[row][col + 1])
except ValueError:
    print("R ERROR")