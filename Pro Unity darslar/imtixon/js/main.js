// 1 masala
function accum(s) {
  return s
    .split('')
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join('-');
}

accum("abcd")
accum("RqaEzty")
accum("cwAt")

// 2 masala
function sum(arr) {
  return arr.reduce((sum, x) => sum + (x > 0 ? x : 0), 0);
}

console.log(sum([1, -4, 7, 12]));

// 4 masala

function shortcut(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i]) === false) {
      result += str[i];
    }
  }
  return result;
}

console.log(shortcut("hello"));
console.log(shortcut("codewars"));


// 5 masala
function other(a, b) {
  return 180 - a - b;
}


// 6 masala
function isPalindrome(str) {
  const s = str.toLowerCase();
  return s === s.split('').reverse().join('');
}

console.log(isPalindrome("Racecar")); 
console.log(isPalindrome("Hello")); 
console.log(isPalindrome("Madam"));

// 7 masala
function sum(integer, limit) {
  let result = [];
  for (let i = integer; i <= limit; i += integer) {
    result.push(i);
  }
  return result;
}

// Misol:
console.log(sum(2, 6));
console.log(sum(3, 10));

// 8 masala
function check(a, x) {
  return a.includes(x);
}

console.log(check([1, 2, 3], 2));
console.log(check(["apple", "banana"], "orange"));
console.log(check(["a", "b", "c"], "a"));

// 9 masala

function number(lines) {
  let result = [];
  for (let i = 0; i < lines.length; i++) {
    result.push((i + 1) + ": " + lines[i]);
  }
  return result;
}

// Примеры:
console.log(number([]));
console.log(number(["a", "b", "c"])); 



// 10 masala
function fakeBin(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] < '5') {
      result += '0';
    } else {
      result += '1';
    }
  }
  return result;
}


console.log(fakeBin("45385593107843568")); 
console.log(fakeBin("1234567890"));


