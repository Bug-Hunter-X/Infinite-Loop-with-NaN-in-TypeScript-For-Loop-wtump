# Infinite Loop with NaN in TypeScript For Loop

This repository demonstrates a subtle bug in TypeScript where a seemingly harmless for loop can lead to an infinite loop when provided with `NaN` as input.  TypeScript's type system, while robust, doesn't catch this runtime error because `NaN` is technically a number.

## The Bug

The `printNumbers` function aims to print numbers from 1 to `n`. However, if `n` is `NaN`, the loop condition `i <= n` will always be true, resulting in an infinite loop. This is because any comparison with `NaN` always returns `false`, even `NaN <= NaN`.

## Solution

The provided solution demonstrates two approaches:
1. Explicitly checking for `isNaN` before the loop.
2. Using a while loop with a stricter condition that handles NaN properly.

Both solutions provide a safer and more robust approach to handling numerical inputs in TypeScript.