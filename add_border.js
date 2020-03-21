/**
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
 */
function addBorder(picture) {
    let max = 0;
    let i;
    for(i = 0; i < picture.length; i++) {
        picture[i] = "*" + picture[i] + "*";

        if(picture[i].length > max)
            max = picture[i].length;
    }

    for(i = 0; i < picture.length; i++) {
        if(picture[i].length < max) 
            picture[i] = picture[i] + ("*".repeat(max-2-picture.length));
    }

    picture.unshift("*".repeat(max));
    picture.push("*".repeat(max));

    return picture;
}

console.log(addBorder(["abc", 
 "ded"]))