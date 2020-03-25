/**
Given a string, your task is to replace each of its characters by the next one in the English alphabet;
i.e. replace a with b, replace b with c, etc (z would be replaced by a).

Example

For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

best solution by myjinxin2015:
	var c="abcdefghijklmnopqrstuvwxyza"
  	return s.replace(/./g,x=>c[c.indexOf(x)+1])
 */
function alphabeticShift(inputString) {
	let code;
	let r="";
	for(let i = 0; i < inputString.length; i++) {
		code = inputString.charCodeAt(i) + 1;
		if(code === 123)
			code = 97;
		r += String.fromCharCode(code);
	}
	return r;
}
console.log(alphabeticShift("abcz"));