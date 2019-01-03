import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.


class Light:
  def __init__(self, distance, duration):
    self.distance = distance
    self.duration = duration

def isLightGreenOrRed(light, speed):
	elapsedTime = round(getTimeToDistanceInSeconds(light.distance,speed))
	lightState = (elapsedTime // light.duration)
	redOrGreen = lightState % 2
	print("is red green ", elapsedTime, lightState,redOrGreen,file=sys.stderr)
	return 'Green' if redOrGreen == 0 else 'Red'
	# a if a < b else b 

def getTimeToDistanceInSeconds(dist, rate):
	return (dist / convertKphToMps(rate))

def getDistanceTraveledInMeters(rate, time):
	# print("dtm input ", rate, time,file=sys.stderr)
	return convertKphToMps(rate) * time

def convertKphToMps(rate):
	kpm = (rate * 1000) / 3600
	# mpm = kpm * 1000
	# mps = mpm / 60
	# print("convert mpm", kpm,file=sys.stderr)
	return kpm

lightData = []

maxSpeed = int(input())
light_count = int(input())
for i in range(light_count):
  distance, duration = [int(j) for j in input().split()]
  lightData.append(Light(distance, duration))

# Write an action using print
# To debug: print("Debug messages...", file=sys.stderr)
print("lightData", len(lightData),file=sys.stderr)

success = False
testSpeed = maxSpeed
while success == False and testSpeed > 0:
	allGreen = True
	for light in lightData:
		print("Speed: ", testSpeed,file=sys.stderr)
		print('Light state: ', isLightGreenOrRed(light, testSpeed), file=sys.stderr)
		if isLightGreenOrRed(light, testSpeed) != 'Green':
			allGreen = False
		print("allGreen: ", allGreen,testSpeed,file=sys.stderr)

	if allGreen == True:
		success = True
	testSpeed -= 1

print(testSpeed + 1)


