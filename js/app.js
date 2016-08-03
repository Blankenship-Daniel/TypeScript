var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x = Point.x, this.y = Point.y);
    };
    return Point;
}());
