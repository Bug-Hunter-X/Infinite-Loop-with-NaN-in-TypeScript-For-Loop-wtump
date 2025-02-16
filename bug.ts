function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // this will work fine
printNumbers(NaN); // this will result in an infinite loop because NaN is not comparable to number