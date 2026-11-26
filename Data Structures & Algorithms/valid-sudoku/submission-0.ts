class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
  for (let i: number = 0; i < board.length; i++) {
    let bucket = new Set<string>();
    for (const element of board[i]) {
      if (!bucket.has(element) && element !== ".") {
        bucket.add(element);
      } else if (element !== ".") {
        return false;
      }
    }
  }

  for (let i: number = 0; i < board[0].length; i++) {
    let bucket = new Set<string>();
    for (let j: number = 0; j < board.length; j++) {
      const element: string = board[j][i];
      if (!bucket.has(element) && element !== ".") {
        bucket.add(element);
      } else if (element !== ".") {
        return false;
      }
    }
  }

  const gapIndexes = [
    [0, 2],
    [3, 5],
    [6, 8],
  ];

  for (let i: number = 0; i < 3; i++) {
    let colLeft: number = gapIndexes[i][0];
    let colRight: number = gapIndexes[i][1];

    let rowIndex: number = 0;
    while (rowIndex < 3) {
      let setCheck = new Set<string>();
      let rowLeft: number = gapIndexes[rowIndex][0];
      let rowRight: number = gapIndexes[rowIndex][1];
      let smallMatrix: string[][] = board
        .slice(rowLeft, rowRight + 1)
        .map((row) => row.slice(colLeft, colRight + 1));

      for (let j: number = 0; j < smallMatrix.length; j++) {
        for (const element of smallMatrix[j]) {
          if (!setCheck.has(element) && element !== ".") {
            setCheck.add(element);
          } else if (element !== ".") {
            return false;
          }
        }
      }
      rowIndex++;
    }
  }

  return true;

    }
}

/*
rules to be valid:
-- each row must contain no duplicates and digits only 1-9
-- each column must contain no duplicates and digits only 1-9
-- each of the nine 3x3 sub-boxes must contain no duplicates and digits only 1-9

-- initial thoughts: save each row in a map
*/
