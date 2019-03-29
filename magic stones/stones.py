import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.
stones = [1, 1, 2, 3, 3, 3, 5, 6, 6, 6, 6, 6, 6, 6, 6, 9]
# stones = [1, 1, 1, 2, 2, 3, 3, 4, 4]
# min_stones = 0

# n = int(input())
# for i in input().split():
#     stones.append(int(i))

stones.sort()
print(stones, file=sys.stderr)

firstNum = stones[0]
count = stones.count(firstNum)
index = 0

while index < len(stones) - 1:
    
    newstone = firstNum + 1

    if count % 2 == 0:       
        del stones[index:index + count]
        l = [newstone] * int(count / 2)
        stones.extend(l)
        stones.sort()
    else:
        del stones[index:index + count-1]
        l = [newstone] * int((count - 1) / 2)
        stones.extend(l)
        stones.sort()
        index += 1


    firstNum = stones[index]
    print(f"{stones} - new index: {index} - nextnum: {firstNum}", file=sys.stderr)
    count = stones.count(firstNum)



# Write an action using print
# To debug: print("Debug messages...", file=sys.stderr)

print(len(stones))
# print("1")
