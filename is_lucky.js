/**
 * Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

 Given a ticket number n, determine if it's lucky or not.

 Example

 For n = 1230, the output should be
 isLucky(n) = true;
 For n = 239017, the output should be
 isLucky(n) = false.
 * @param n
 * @returns {boolean}
 */
function isLucky(n) {
    n=n.toString();
    let n1=n.substring(0, n.length/2);
    let n2=n.substring(n.length/2, n.length);

    let s1=0, s2=0;
    for(let i=0; i< n1.length; i++) {
        s1+=parseInt(n1[i]);
        s2+=parseInt(n2[i]);
    }
    return s1===s2;
}

console.log(isLucky(1230));
