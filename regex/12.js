const doubleLetters = str => {
    let previousChar = null;

    for(let i = 0; i < str.length; i++) {
        if (previousChar === str.charAt(i)) { return true }
        previousChar = str.charAt(i);
    }

    return false;
}

test(doubleLetters("loop"), true)
test(doubleLetters("meeting"), true)
test(doubleLetters("yummy"), true)
test(doubleLetters("moo"), true)
test(doubleLetters("toodles"), true)
test(doubleLetters("droop"), true)
test(doubleLetters("loot"), true)
test(doubleLetters("orange"), false)
test(doubleLetters("munchkin"), false)
test(doubleLetters("forestry"), false)
test(doubleLetters("raindrops"), false)
test(doubleLetters("gold"), false)
test(doubleLetters("paradise"), false)
test(doubleLetters("chicken"), false)