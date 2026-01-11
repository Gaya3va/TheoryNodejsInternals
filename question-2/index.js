// Import the checkPrime function using ES Modules
import { checkPrime } from "./math.js";

// Test the function with different values
console.log(checkPrime(2));   // true
console.log(checkPrime(5));   // true
console.log(checkPrime(10));  // false
console.log(checkPrime(17));  // true
console.log(checkPrime(1));   // false

/*✅ Output Example
true
true
false
true
false*/