(function() {
  'use strict';

  class Point {
    x: number;
    y: number;

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

  let p1 = new Point(10, 30);
  let p2 = new Point(3 , 9 );
  let p3 = p1.add(p2);

  document.write(p3.toString());
});
