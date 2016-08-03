var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    Point.prototype.toString = function () {
        return this.x + " " + this.y;
    };
    return Point;
}());
var p1 = new Point(1, 2);
var p2 = new Point(10, 20);
var p3 = new Point(5, 6);
var p4 = new Point(7, 3);
var pointArray = new Array();
pointArray.push(p1);
pointArray.push(p2);
pointArray.push(p3);
pointArray.push(p4);
for (var i = 0; i < pointArray.length; i++) {
    console.log(pointArray[i].toString());
}
