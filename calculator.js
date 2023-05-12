function calculate( operator, num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        return 'Invalid input.Please eneter numeric value.';

    }
    switch (operator) {
        case"+":
        return num1+num2;
        case"-":
        return num1-num2;
        case"*":
        return num1*num2;
        case"/":
         if (num2=== 0) {
             return "Cannot Divide By Zero.";
         }
         return num1/num2;
         default:
             return "Invalid Operator.";
             
    }
}