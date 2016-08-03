(function () {
    'use strict';
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
    var p1 = new Point(10, 30);
    var p2 = new Point(3, 9);
    var p3 = p1.add(p2);
    document.write(p3.toString());
});
