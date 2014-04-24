#!/usr/bin/env node

require("./index");

var A = ["a", "b", "c", "a", "g", "a", "e", "e"],
	B = ["a", "h", "j", "g", "q"],
	C = [
		{ first: "Will", last: "Shakespeare" },
		{ first: "Will", last: "Shortz" },
		{ first: "Wayne", last: "Shortz" }
	];

console.log(A.getUnique());

console.log(C.getUnique("first"));

console.log(C.getUnique(function(d) { return d.last; }));

console.log(A.shuffle());

console.log(A.union(B));

console.log(A.intersection(B));

console.log(C.random());

//http://www.poets.org/viewmedia.php/prmMID/15442
console.log("     Often beneath the wave, wide from this ledge \n".strip());

console.log("Their numbers as he watched, Beat on the dusty shore and were obscured.".toTitleCase());

console.log("The dice of drowned men's bones he saw bequeath An embassy.".regexIndexOf(/\bd/, 7))