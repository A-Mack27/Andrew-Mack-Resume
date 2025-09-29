// Modified version of the animation found here
// https://codepen.io/Tibixx/pen/YzVqzZM

interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  length: number;
  width: number;
  v1: number;
  v2: number;
  half: boolean;
  hue: number;
  scale: number;
  maxScale: number;
  scaleDirection: number;
}

interface BackgroundDot {
  rad: number;
  x: number;
  y: number;
  hue: number;
}

interface Config {
  hue: number;
  shadow: boolean;
  width: number;
  length: number;
  emitNum: number;
  speed: number;
  opacity: number;
  maxLines: number;
}

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let w: number;
let h: number;
let lines: Line[] = [];
let bgDots: BackgroundDot[] = [];
let generateLinesInterval: ReturnType<typeof setInterval>;

const conf: Config = {
  hue: 0,
  shadow: false,
  width: 1,
  length: 1.5,
  emitNum: 2, 
  speed: 0.05, 
  opacity: 0.75, 
  maxLines: 150 
};

function initializeCanvas(canvasElement: HTMLCanvasElement): void {
  canvas = canvasElement;
  ctx = canvas.getContext("2d")!;
  
  const handleResize = () => {
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;

    bgDots = [
      {
        rad: (w + h) / 2,
        x: w / 2,
        y: 0,
        hue: 0
      },
      {
        rad: (w + h) / 2,
        x: 0,
        y: h,
        hue: -45
      },
      {
        rad: (w + h) / 2,
        x: w,
        y: h,
        hue: -90
      }
    ];
  };
  
  window.addEventListener('resize', handleResize);
  handleResize();
}

function emitLine(): void {
  if (conf.maxLines < lines.length) return;
  
  for (let i = 0; i < conf.emitNum; i++) {
    const rx = Math.random() * w + 100;
    const ry = Math.random() * h - 100;
    const maxScale = Math.random() * 0.5 + 1.2;
    lines.push({
      x1: rx,
      y1: ry,
      x2: rx,
      y2: ry,
      length: (Math.random() * (260 - 80) + 80) * conf.length,
      width: (Math.random() * (15 - 9) + 8) * conf.width,
      v1: (Math.random() * (4 - 2) + 2) * conf.speed,
      v2: (Math.random() * (1 - 0.5) + 0.5) * conf.speed,
      half: false,
      hue: Math.random() * 50,
      scale: 0.1,
      maxScale: maxScale,
      scaleDirection: 1
    });
  }
}

function drawBackground(): void {
  ctx.globalCompositeOperation = "lighter";
  for (let i = 0; i < bgDots.length; i++) {
    const grd = ctx.createRadialGradient(bgDots[i].x, bgDots[i].y, 0, bgDots[i].x, bgDots[i].y, bgDots[i].rad);
    grd.addColorStop(0, `rgba(25, 133, 161, 0.2)`);
    grd.addColorStop(1, `rgba(25, 133, 161, 0)`);
    ctx.beginPath();
    ctx.arc(bgDots[i].x, bgDots[i].y, bgDots[i].rad, 0, Math.PI * 2);
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.closePath();
  }
}

function drawLines(): void {
  ctx.globalCompositeOperation = "source-over";
  for (let i = 0; i < lines.length; i++) {
    // Calculate center point for scaling
    const centerX = (lines[i].x1 + lines[i].x2) / 2;
    const centerY = (lines[i].y1 + lines[i].y2) / 2;
    
    // Apply scaling transformation
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.scale(lines[i].scale, lines[i].scale);
    ctx.translate(-centerX, -centerY);
    
    ctx.lineWidth = lines[i].width;
    ctx.beginPath();
    ctx.moveTo(lines[i].x1, lines[i].y1);
    ctx.lineTo(lines[i].x2, lines[i].y2);
    ctx.strokeStyle = `rgba(195, 66, 63, 0.95)`;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    // Update scale based on line lifecycle
    if (lines[i].scaleDirection === 1) {
      // Growing phase
      lines[i].scale += 0.08;
      if (lines[i].scale >= lines[i].maxScale) {
        lines[i].scale = lines[i].maxScale;
        lines[i].scaleDirection = 0; // Stop growing
      }
    } else if (lines[i].scaleDirection === -1) {
      // Shrinking phase
      lines[i].scale -= 0.1;
      if (lines[i].scale <= 0.1) {
        lines[i].scale = 0.1;
      }
    }

    if (lines[i].half === false) {
      lines[i].x1 -= lines[i].v1;
      lines[i].y1 += lines[i].v1;
      lines[i].x2 -= lines[i].v2;
      lines[i].y2 += lines[i].v2;
      if (dist(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2) > lines[i].length) {
        lines[i].half = true;
      }
    } else {
      lines[i].x1 -= lines[i].v2;
      lines[i].y1 += lines[i].v2;
      lines[i].x2 -= lines[i].v1;
      lines[i].y2 += lines[i].v1;
      
      // Start shrinking when line is about to disappear (very close to the removal threshold)
      if (dist(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2) <= 2 && lines[i].scaleDirection !== -1) {
        lines[i].scaleDirection = -1;
      }
    }
  }
}

function clear(): void {
  ctx.globalCompositeOperation = "source-over";
  ctx.beginPath();
  ctx.fillStyle = "#1985A1";
  ctx.fillRect(0, 0, w, h);
  ctx.closePath();
}

function checkLines(): void {
  emitLine();
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].half === true && dist(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2) <= 1) {
      lines[i] = lines[lines.length - 1];
      lines.pop();
    } else if (lines[i].x1 < 0 && lines[i].x2 < 0 && lines[i].y1 > h && lines[i].y2 > h) {
      lines[i] = lines[lines.length - 1];
      lines.pop();
    }
  }
}

function dist(x1: number, y1: number, x2: number, y2: number): number {
  return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}

function render(): void {
  clear();
  drawBackground();
  drawLines();
  requestAnimationFrame(render);
}

export function startLineAnimation(canvasId: string): void {
  const canvasElement = document.getElementById(canvasId) as HTMLCanvasElement;
  if (!canvasElement) return;

  if (generateLinesInterval) {
    clearInterval(generateLinesInterval);
  }
  lines = [];

  initializeCanvas(canvasElement);
  
  generateLinesInterval = setInterval(checkLines, 10);
  
  render();
}

export function stopLineAnimation(): void {
  if (generateLinesInterval) {
    clearInterval(generateLinesInterval);
  }
  lines = [];
}

export function updateConfig(newConfig: Partial<Config>): void {
  Object.assign(conf, newConfig);
}
