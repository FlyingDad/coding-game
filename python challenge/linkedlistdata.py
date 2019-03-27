# http://www.pythonchallenge.com/pc/def/linkedlist.php
# read the source

# first link
# http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing=12345

# import urllib.request as url

# base = 'http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing='
# num = '12345'
# links = []

# # lets save numbers to a file and analyze


# for x in range(400):
#     req = url.urlopen(base + num)
#     res = req.read().decode()
#     # print(res)
#     str = ''.join(reversed(res))
#     index = str.find(' ')
#     # print(index)
#     num = str[0:index]
#     print(num)
#     # print(ord(num[0]))
#     # num.lstrip(' ')
#     # print(type(num))
#     links.append(num)

# # str = " test"
# print(links)

import linkedlistnums

# print(linkedlistnums.foundNums)

numDict = {}

for num in linkedlistnums.foundNums:
    if num in numDict:
        numDict[num] += 1
    else:
        numDict[num] = 1

for key in numDict:
    print(f"{key} : {numDict[key]}")