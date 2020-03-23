/**
You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right.
You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

Example

For inputArray = [5, 3, 6, 7, 9], the output should be
avoidObstacles(inputArray) = 4.

Check out the image avoid_obstacles.png for better understanding:
 */
function avoidObstacles(inputArray) {
    let d = 2;
    let i = 0;

    while(i<inputArray.length) {
        if(inputArray[i]%d==0) {
            d++;
            i = 0;
        } else
            i++;
    }

    return d;
}
console.log(avoidObstacles([5, 3, 6, 7, 9]));