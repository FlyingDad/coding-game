# http://www.pythonchallenge.com/pc/def/equality.html
import re
import sys

data = ''
with open('bodyguard.txt') as f:
    read_data = f.read()

    pattern = '[a-z][A-Z]{3}[a-z][A-Z]{3}[a-z]'
    
    match = re.findall(pattern, read_data)
    if match:
        print(match)
        for m in match:
            data += m[4]

    # for cc in range(100):
    #     chunk = read_data[cc:cc+9]
    #     print(chunk)

    # for c in range(1,len(chunk) - 4):
    #     if ord(chunk[c]) >= 65 and ord(chunk[c]) <= 90:
    #         if ord(chunk[c+1]) >= 65 and ord(chunk[c+1]) <= 90:
    #             if ord(chunk[c+2]) >= 65 and ord(chunk[c+2]) <= 90:
    #                 if ord(chunk[c+4]) >= 65 and ord(chunk[c+4]) <= 90:
    #                     if ord(chunk[c+5]) >= 65 and ord(chunk[c+5]) <= 90:
    #                         if ord(chunk[c+6]) >= 65 and ord(chunk[c+6]) <= 90:
    #                             if ord(chunk[c-1]) > 90:
    #                                 if ord(chunk[c+7]) > 90:
    #                                     data += chunk[c+3]
            

f.closed
print(data)

# http://www.pythonchallenge.com/pc/def/ocr.html

# rareChars = ''
# with open('rarechars.txt') as f:
#     read_data = f.read()

#     for c in read_data:
#         if ord(c) >= 97 and ord(c) <= 122:
#             rareChars += c
#         #     val = rareChars.get(c)
#         #     rareChars[c] = val + 1
#         # else:
#         #     rareChars[c] = 1
# f.closed
# print(rareChars)
