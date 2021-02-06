class Rope{
    constructor(bodyA, pointB){
        var options= {
            bodyA:bodyA, pointB:pointB, stiffness:1.2, length:250
        }
        this.string = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.string);
    }
    display(){
        if (this.string.bodyA){

        var pointA = this.string.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke(48, 22, 8);
            strokeWeight(3);
            line(pointB.x, pointB.y,pointA.x,pointA.y);
        } pop();
    }
}