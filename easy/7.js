function missingAngle(angle1, angle2) {
	
}

test(missingAngle(27, 59), "obtuse")
test(missingAngle(135, 11), "acute")
test(missingAngle(45, 45), "right")
test(missingAngle(45, 15), "obtuse")
test(missingAngle(31, 100), "acute")
test(missingAngle(35, 55), "right")