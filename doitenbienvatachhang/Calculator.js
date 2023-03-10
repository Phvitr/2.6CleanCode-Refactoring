"use strict";
exports.__esModule = true;
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.calculate = function (firstOperand, secondOperand, operator) {
        switch (operator) {
            case this.ADDITION:
                return firstOperand + secondOperand;
            case this.SUBTRACTION:
                return firstOperand - secondOperand;
            case this.MULTIPLICATION:
                return firstOperand * secondOperand;
            case this.DIVISION:
                if (secondOperand !== 0)
                    return firstOperand / secondOperand;
                else
                    console.log("Cannot divide by zero");
            default:
                console.log("Unsupported operation");
        }
    };
    Calculator.ADDITION = '+';
    Calculator.SUBTRACTION = '-';
    Calculator.MULTIPLICATION = '*';
    Calculator.DIVISION = '/';
    return Calculator;
}());
exports.Calculator = Calculator;
