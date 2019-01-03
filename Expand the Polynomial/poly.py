import sys
import math
import re

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

poly = input()

poly = '(x-2)(x+2)'
# Write an action using print
print("input: ", poly)
# print("expandedpolynomial")
#(?<=\()[^)]+(?=\))
line = "Cats are smarter than dogs"
matchObj = re.match(r'(?<=\()[^)]+(?=\))', poly)

if matchObj:
    print("matchObj.group() : ", matchObj.group())
    print("matchObj.group(1) : ", matchObj.group(1))
    print( "matchObj.group(2) : ", matchObj.group(2))
else:
    print("No match!!")
