// === 1 misol
/*function solution(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return [];
    }

    return arr.slice().sort((a, b) => a - b);
}

console.log(solution([1, 2, 10, 50, 5]));
console.log(solution(null));             
console.log(solution([]));   
*/

// === 2 misol
/*
function calculate(a, b, operation) {
    if (operation === "add") {
        return a + b;
    }
    if (operation === "subtract") {
        return a - b;
    }
    if (operation === "multiply") {
        return a * b;
    }
    if (operation === "divide") {
        return a / b;
    }
    return null; 
}

console.log(calculate(5, 2, "add"));     
console.log(calculate(5, 2, "subtract")); 
console.log(calculate(5, 2, "multiply"));
console.log(calculate(5, 2, "divide"));

*/

// === 3 misol
/*
function removeVowels(str) {
    let result = "";
    const vowels = "aeiou";

    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            result += str[i];
        }
    }

    return result;
}
console.log(removeVowels("hello"));   
console.log(removeVowels("codewars")); 
console.log(removeVowels("goodbye")); 
console.log(removeVowels("HELLO"));   
*/
// === 4 misol
/*
function renoveAll(str){
    let result = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] !== "!"){
            result += str[i]
        }
    }
    return result
}

console.log(remove("Hi!"));     
console.log(remove("Hi!!!"));     
console.log(remove("!Hi"));  
console.log(remove("!Hi!"));  
console.log(remove("Hi! Hi!"));
console.log(remove("Hi"));       
*/


// === 5 misol
/*
function fors(n){
    let result = [];
    for (let i = 0; i <= n; i++) {
        result.push(2 ** i);
    }
    return result;
}
console.log(fors(0)); 
console.log(fors(1)); 
console.log(fors(2)); 
console.log(fors(5)); 
*/

// === 6 misol
/*
function getInitials(name) {
    let words = name.split(" ");
    let first = words[0][0].toUpperCase(); 
    let second = words[1][0].toUpperCase(); 
    return first + "." + second;
}
console.log(getInitials("Sam Harris")); 
console.log(getInitials("patrick feeney"));
*/

// === 7 misol
/*
function next(color){
    if(color === 'yashil'){
        return 'sariq';
    }
    if(color === 'sariq'){
        return 'qizil';
    }
    if(color === 'qizil'){
        return 'yashil';
    }
    return null;
}
console.log(next("yashil"));
console.log(next("sariq")); 
console.log(next("qizil"));  
console.log(next("ko‘k"));
*/
/// === 8 misol
/*
function remove(str){
   return str.slice(1, -1);
}

console.log(remove("salom"))
console.log(remove('hello'))
console.log(remove('abs'))
console.log(remove('ab'))
*/
// === 9 misol
/*
function multiply(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return 0;
    }
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        result *= arr[i];
    }
    return result;
}
console.log(multiply([1, 2, 3, 4])); 
console.log(multiply([5, 2, 1]));    
console.log(multiply([10]));       
*/
// === 10 misol
/*
function besh(){
    return 'five'.length;
}
console.log(giveMeFive());
*/