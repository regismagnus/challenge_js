/**
Check if all digits of the given integer are even.

Example

For n = 248622, the output should be
evenDigitsOnly(n) = true;
For n = 642386, the output should be
evenDigitsOnly(n) = false.

best solution by toby_t1:
	return !(n+'').match(/[13579]/)
 */
function evenDigitsOnly(n) {
    n = n.toString();
    for(let i = 0; i < n.length; i++) {
        if(parseInt(n[i])%2 !== 0)
            return false;
    }
    return true;
}
console.log(evenDigitsOnly(123))