
//1. "" + 1 + 0; we will have 10, because when we write plus after string, the num concat to our empty string and the type will become string. After it we will have the same logic.

//2. "" - 1 + 0; we will have -1, beacouse after it we have minus and it will be like primitive calculatein of -1 + 0.

//3. when we console true + false our result will be 1. Value of true is 1 and of false is 0 we will have 1 + 0 === 1.

//4. 6 / '3'; will be 2 with number type, because we will have convertation to strin only when we have sum of string with something else.

//5. '2' * '3'; will be 6 and the type will be number. i explained it in my last example)..

//6. 4 + 5 + "px"; output will be 9px because at first we have simple sum of nums and after it we have sum with string.

//7. "$" + 4 + 5; in this example we will have $45 becaus at first we will have concatanation and the same with next sum and the type will be string.

//8. "4" - 2; will be 2. We have simple calculation and the result will be number type.

//9. "4px" - 2 we will have NaN, becaus we can not calculate diferent types only + will concat them.

// 10. 7 / 0  we will have Infinity. And we know it from our mathematical lessons, but because of their type is number Infinity's type will be number.

// 11. " -9 " + 5 here we will have concatanation of two nums, because the type of -9 is string, after concat we will have result with string type.

// 12. " -9 " - 5 this type of calculation will be like simple calculation and the result will be -14 with number type, and forgot about spaces into string that it does not make any changes.

// 13. null + 1  null's type is primitive. And it is falsy value thats why i think that the result will be like 0 + 1 = 1 with number type result;

// null and undefined have different types but are equal to each other. They are part of primitive types. 
// 14. undefined + 1; sum with undefined will be NaN and type of NaN is number.