const getErrorCode = number => parseInt(number / 100) * 100;

console.log(getErrorCode(1000)); // 1000
console.log(getErrorCode(1234)); // 1200
console.log(getErrorCode(1500)); // 1500
console.log(getErrorCode(3999)); // 3900
console.log(getErrorCode(4999)); // 4900
console.log(getErrorCode(9999)); // 9900
