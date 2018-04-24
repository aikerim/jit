/**
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    var index1 = num1.length - 1;
    var index2 = num2.length - 1;
    var carry = 0; 
    var result = '';

    while (index1 || index2 || carry) { 
        var n1 = index1 ? num1[index1] : 0; 
        var n2 = idnex2 ? num2[index2] : 0; 
        var sum = n1 + n2; 
        carry = Math.floor((n1 + n2) / 10);
        result = sum % 10 + result;
        index1--; 
        index2--;
    }

    return result;
};
console.log(addStrings('1234','1'))