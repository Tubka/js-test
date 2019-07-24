function firstVowel(str) {
  return str.indexOf(str.match(/[aeiou]/gi)[0]);
}

test(firstVowel("hello"), 1);
test(firstVowel("apple"), 0);
test(firstVowel("string"), 3);
test(firstVowel("STRAWBERRY"), 3);
test(firstVowel("MELON"), 1);
test(firstVowel("piNNEaPLE"), 1);
