helpers
=======

A few convenience functions for Javascript that should be in the language. All of the functions herein are extensions of the String or Array type, so one need only require this library to get the functionality. For use in the browser, use [browserify](https://github.com/substack/node-browserify) or include the files in the `lib/` directly in the page.

# Arrays

Assuming `arr` is an array...

+ `arr.getUnique(accessor)` reduces `arr` to unique elements. If `arr` contains objects, you'll need to provide an `accessor` function to reduce that object to a hash value (a unique string representing the object). `accessor` can also be a string itself, in which case it acts as the property of the object to return.

+ `arr.shuffle()` randomly reorders the array

+ `arr.union(b)`  returns a unique list of elements in `arr` or `b`

+ `arr.intersection(b)` returns the elements of `arr` also present in `b`

+ `arr.random()` returns a random element from `arr`

There are also backward compatability checks for `.map()` and `.forEach()`, which is only relevant for older browsers.

# Strings

Assuming `str` is a string...

+ `str.strip()` removes whitespace from the beginning and end

+ `str.toTitleCase()` capitalizes the first letter of each word

+ `str.regexIndexOf(regex, startpos)` returns the index of the first match for a supplied regular expression or -1, optionally starting from `startpos`