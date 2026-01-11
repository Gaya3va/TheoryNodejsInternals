// Function to check whether a number is prime
function checkPrime(num) {
  // Prime numbers must be greater than 1
  if (num <= 1) {
    return false;
  }

  // Check divisibility from 2 to square root of num
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Export using ES Modules
export { checkPrime };
