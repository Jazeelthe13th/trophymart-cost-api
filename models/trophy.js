import materialCost from '../config/materialConfig';
import coatingCost from '../config/coatingConfig';

class Trophy{
    constructor(type, material, coating){
        this.type = type;
        this.material = material;
        this.coating = coating;
    }
    getMaterial(){
        return this.material;
    }
    getCoating(){
        return this.coating;
    }
}

export class CylindricalTrophy extends Trophy{
    constructor(material, coating, radius, height){
        super('Cylindrical', material, coating);
        this.radius = radius;
        this.height = height;
    }
    getVolume(){
        // Formula for volume of a cylinder is (pi * square of radius * height)
        return Math.PI * Math.pow(this.radius, 2) * this.height;
    }
    getSurfaceArea(){
        // Formula for surface area is sum of area of two circles and the area of face of cylinder
        return (2 * Math.PI * this.radius * this.height) + (2 * Math.PI * Math.pow(this.radius, 2));
    }
    getCost(){
        // Total Cost would be sum of Material type times volume and Coating type times surface area 
        return (materialCost[this.material] * this.getVolume()) + (coatingCost[this.coating]*this.getSurfaceArea());
    }
}

export class CuboidalTrophy extends Trophy{
    constructor(material, coating, length, breadth, height){
        super('Cuboidal', material, coating);
        this.length = length;
        this.breadth = breadth;
        this.height = height;
    }
    getVolume(){
        // Formula for volume of a cuboid is l*b*h
        return this.length * this.breadth * this.height;
    }
    getSurfaceArea(){
        // Formula for surface area is sum of area of all faces
        return 2*(this.length*this.breadth + this.length*this.height + this.height*this.breadth);
    }
    getCost(){
        // Total Cost would be sum of Material type times volume and Coating type times surface area 
        return (materialCost[this.material] * this.getVolume()) + (coatingCost[this.coating]*this.getSurfaceArea());
    }
}

export class ConicalTrophy extends Trophy{
    constructor(material, coating, radius, height){
        super('Conical', material, coating);
        this.radius = radius;
        this.height = height;
    }
    getVolume(){
        // Formula for volume of a cylinder is (pi * square of radius * One third of height)
        return Math.PI * Math.pow(this.radius, 2) * (this.height/3);
    }
    getSurfaceArea(){
        // Formula for surface area is not as easy as I thought it was.
        return (2 * Math.PI * this.radius * this.height) + (2 * Math.PI * Math.pow(this.radius, 2));
    }
    getCost(){
        // Total Cost would be sum of Material type times volume and Coating type times surface area 
        return (materialCost[this.material] * this.getVolume()) + (coatingCost[this.coating]*this.getSurfaceArea());
    }
}
