class Point {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(point: Point) : Point {
    return new Point(
      this.x + point.x,
      this.y + point.y
    );
  }

  toString() : string {
    return this.x + " " + this.y;
  }
}

var p1 = new Point(1, 2);
var p2 = new Point(10, 20);
var p3 = new Point(5, 6);
var p4 = new Point(7, 3);

let pointArray: Array<Point> = new Array();

pointArray.push(p1);
pointArray.push(p2);
pointArray.push(p3);
pointArray.push(p4);

for (let i: number = 0; i < pointArray.length; i++) {
  console.log(pointArray[i].toString());
}
