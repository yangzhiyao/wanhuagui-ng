import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '万花规';
  rbig: number;
  rsmall: number;
  rpen: number;

  ox: number;
  oy: number;

  x0: number;
  y0: number;

  isFirst: boolean;

  @ViewChild('stage', { static: false }) public canvas: ElementRef;
  ctx: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.rbig = 300;
    this.rsmall = 175;
    this.rpen = 155;
  }

  startDraw() {
    const neCanvas = this.canvas.nativeElement;
    neCanvas.height = neCanvas.height;
    this.ctx = neCanvas.getContext('2d');
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = 'green';

    // 求执行次数（最小公倍数/静圆半径）
    const rb = this.rbig;
    const rs = this.rsmall;
    const rp = this.rpen;
    let m = rb;
    let n = rs;
    let tmp: number;

    while (n !== 0) {
      tmp = m % n;
      m = n;
      n = tmp;
    }

    const maxdegree = rs / m * 2 * Math.PI;

    // 绘图
    this.isFirst = true;

    this.ox = neCanvas.width / 2;
    this.oy = neCanvas.height / 2;

    let x: number;
    let y: number;

    let degree = 0;
    // console.log(degree, maxdegree);

    const step = () => {
      setTimeout(() => {
        x = Math.round(rp * Math.cos(degree * ((rb) / rs - 1)) + (rb - rs) * Math.cos(degree));
        y = Math.round(rp * Math.sin(degree * ((rb) / rs - 1)) - (rb - rs) * Math.sin(degree));
        this.toPoint(x, y);
        degree += 0.02;
        // console.log(degree % 0.5);
        this.ctx.stroke();
        if (degree <= maxdegree) {
          step();
        } else {
          this.ctx.stroke();
        }
      }, 10);
    };

    step();

  }

  toPoint(x: number, y: number) {
    if (this.isFirst) {
      this.ctx.beginPath();
      this.ctx.moveTo(x + this.ox, y + this.oy);
      this.isFirst = false;
      return;
    }

    this.ctx.lineTo(x + this.ox, y + this.oy);
  }
}
