class Slingshot{
    constructor(bodyA, point){
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

    display(){
        if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position;
        var point2 = this.slingshot.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, point2.x, point2.y);
        }
    }
    fly(){
        this.slingshot.bodyA = null;
    }
}