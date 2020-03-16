/**
 * Sudoku is a number-placement puzzle.
 * The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row,
 * and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

 Implement an algorithm that will check whether the given grid of numbers represents a valid
 Sudoku puzzle according to the layout rules described above.
 Note that the puzzle represented by grid does not have to be solvable.

 Example

 For

 grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
 ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
 ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
 ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
 ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
 ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
 ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
 ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
 ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
 the output should be
 sudoku2(grid) = true;

 For

 grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
 ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
 ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
 ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
 ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
 ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
 ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
 ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
 ['.', '2', '.', '.', '3', '.', '.', '.', '.']]
 the output should be
 sudoku2(grid) = false.

 The given grid is not correct because there are two 1s in the second column. Each column, each row,
 and each 3 × 3 subgrid can only contain the numbers 1 through 9 one time.
 * @param grid
 * @returns {boolean}
 */
function sudoku2(grid) {
    let i,b,c,cs,has,count;
    for(i=0; i<9; i++) {
        for(c=1; c<10; c++) {
            //see line
            if(grid[i].indexOf(c.toString())!==grid[i].lastIndexOf(c.toString()))
                return false;
            has=false;
            for(b=0; b<9; b++) {
                //see coll
                if(grid[b][i]===c.toString()) {
                    if(has)
                        return false;
                    has=true;
                }
            }
        }
    }

    //see 3x3
    for(i=0; i<9; i+=3) {
        for(b=0; b<9; b+=3) {
            for(c=1; c<10; c++) {
                cs=c.toString();
                count=0;
                if(grid[i][b]===cs)
                    count++;
                if(grid[i][b+1]===cs)
                    count++;
                if(grid[i][b+2]===cs)
                    count++;
                if(grid[i+1][b]===cs)
                    count++;
                if(grid[i+1][b+1]===cs)
                    count++;
                if(grid[i+1][b+2]===cs)
                    count++;
                if(grid[i+2][b]===cs)
                    count++;
                if(grid[i+2][b+1]===cs)
                    count++;
                if(grid[i+2][b+2]===cs)
                    count++;
                if(count>1)
                    return false;
            }
        }
    }
    return true;
}
console.log(sudoku2([[".","4",".",".",".",".",".",".","."],
    [".",".","4",".",".",".",".",".","."],
    [".",".",".","1",".",".","7",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".","3",".",".",".","6","."],
    [".",".",".",".",".","6",".","9","."],
    [".",".",".",".","1",".",".",".","."],
    [".",".",".",".",".",".","2",".","."],
    [".",".",".","8",".",".",".",".","."]]));
