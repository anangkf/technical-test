function scrambleMatrix(matrix, rotate) {
  let scrambled = [];

  Array.from({ length: rotate }).map(() => {
    scrambled = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = matrix.length - 1; j >= 0; j--) {
        if (!scrambled[i]) {
          scrambled[i] = [matrix[j][i]];
        } else {
          scrambled[i].push(matrix[j][i]);
        }
      }
    }
    matrix = scrambled;
  });

  return scrambled;
}

console.log(
  scrambleMatrix(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1
  )
);
console.log(
  scrambleMatrix(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    2
  )
);
console.log(
  scrambleMatrix(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    3
  )
);
console.log(
  scrambleMatrix(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    4
  )
);
console.log(
  scrambleMatrix(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    5
  )
);
console.log(
  scrambleMatrix(
    [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ],
    1
  )
);
