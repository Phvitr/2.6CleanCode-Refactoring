"use strict";
exports.__esModule = true;
exports.Cylinder = void 0;
var Cylinder = /** @class */ (function () {
    function Cylinder() {
    }
    // public static getVolume(radius: number, heigth: number): number {
    //     let baseArea: number = Math.PI * radius**2;
    //     let perimeter: number = Math.PI * radius * 2;
    //     let totalArea: number = perimeter * heigth + 2 * baseArea;
    //     return totalArea;
    // }
    Cylinder.getPerimeter = function (radius) {
        return Math.PI * radius * 2;
    };
    Cylinder.getBaseArea = function (radius) {
        return Math.PI * Math.pow(radius, 2);
    };
    Cylinder.getTotalArea = function (radius, height) {
        var baseArea = this.getBaseArea(radius);
        var perimeter = this.getPerimeter(radius);
        var totalArea = perimeter * height + 2 * baseArea;
        return totalArea;
    };
    return Cylinder;
}());
exports.Cylinder = Cylinder;
