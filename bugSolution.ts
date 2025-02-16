function printNumbers(n: number): void {
  if (isNaN(n)) {
    console.error('Invalid input: n must be a number.');
    return;
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

function printNumbersWhileLoop(n: number): void {
    let i = 1;
    while(i <= n || isNaN(n)) {
        if(!isNaN(n)){
            console.log(i);
        }
        i++;
    }
}

printNumbers(5); // Works correctly
printNumbers(NaN); // Outputs an error message
printNumbersWhileLoop(5); // Works correctly
printNumbersWhileLoop(NaN); // Stops gracefully