/**
 * Given two strings, find the number of common characters between them.

 Example

 For s1 = "aabcc" and s2 = "adcaa", the output should be
 commonCharacterCount(s1, s2) = 3.

 Strings have 3 common characters - 2 "a"s and 1 "c".
 * @param s1
 * @param s2
 * @returns {number}
 */
function commonCharacterCount(s1, s2) {
    let con1={};
    let con2={};
    let c=0;
    let i;
    for(i=0;i < s1.length; i++) {
        if(!con1[s1[i]])
            con1[s1[i]] = 0;
        con1[s1[i]]++;
    }

    for(i=0;i < s2.length; i++) {
        if(!con2[s2[i]])
            con2[s2[i]] = 0;
        con2[s2[i]]++;
    }

    for(i in con1) {
        if(con2[i])
            c+=(con2[i]>con1[i] ? con1[i] : con2[i]);
    }
    return c;
}
console.log(commonCharacterCount("aabcc", "adcaa"));