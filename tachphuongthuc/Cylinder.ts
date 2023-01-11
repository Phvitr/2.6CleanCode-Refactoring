export class Cylinder {
    // public static getVolume(radius: number, heigth: number): number {
    //     let baseArea: number = Math.PI * radius**2;
    //     let perimeter: number = Math.PI * radius * 2;
    //     let totalArea: number = perimeter * heigth + 2 * baseArea;
    //     return totalArea;
    // }
    private static getPerimeter(radius: number): number {
        return Math.PI * radius * 2;
    }
    private static getBaseArea(radius: number): number {
        return Math.PI * radius**2;
    }
    public static getTotalArea(radius: number, height: number): number {
        let baseArea: number = this.getBaseArea(radius);
        let perimeter: number = this.getPerimeter(radius);
        let totalArea: number = perimeter * height + 2 * baseArea;
        return totalArea;
    }
}