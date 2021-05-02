class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.004,
            length: 1
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    fly(){
        this.rope.bodyA = null;
    }
    attach(){
        this.rope.bodyA=stone1.body
    }
    display(){
        if(this.rope.bodyA){

        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}