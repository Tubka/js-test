function missingAngle(angle1, angle2) {
	
}

test(missingAngle(27, 59), "acute")
test(missingAngle(135, 11), "obtuse")
test(missingAngle(45, 45), "right")
test(missingAngle(45, 15), "acute")
test(missingAngle(31, 100), "obtuse")
test(missingAngle(35, 55), "right")
