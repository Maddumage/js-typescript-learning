let word = 'racecar';

let wordReverse = word.split('').reverse().join('');

if (word === wordReverse) {
	console.log(`${word} is a Palindrome word`);
} else {
	console.log(`${word} is not a Palindrome word`);
}
