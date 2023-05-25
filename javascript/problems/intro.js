// coerces
if("" == 0){
    console.log("true");
}

const x = 202;
// true for any value of x
if(1 < x < 3){
    console.log("1 < x < 3");
}

// allows properties to access which aren't present

const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;
console.log(area);


// most of lang throw an error during complilation but not javascript when it runs.


// Solution typescript provides: 
/*  1. Static type checking
    2. Optional static typing
    3. Structural typing
    4. Type inference
    5. Type erasure
    6. Generic types
    7. Type casting
    8. Duck typing
    9. Literal types
    10. Union types
    11. Intersection types
    12. Type aliases
    13. String literal types
    14. Numeric literal types
    15. Enum types
    16. The any type
    17. The unknown type
    18. The never type
    19. The void type
    20. The object type
    21. The tuple type
    22. The readonly type modifier
    23. The keyof type operator
    24. The typeof type operator
    25. The extends keyword
    26. The keyof type operator
    27. The typeof type operator
    28. The extends keyword
    29. The keyof type operator'
    30. The typeof type operator
    31. The extends keyword
    32. The keyof type operator
    33. The typeof type operator
    34. The extends keyword
    35. The keyof type operator
*/

console.log(4 / []); 