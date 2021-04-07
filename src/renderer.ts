
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
///@ts-ignore
import jollyRogerURI from './assets/jolly-roger.png';

const jollyRogerImage = new Image();
console.log(jollyRogerURI);
jollyRogerImage.src = jollyRogerURI;

export class Renderer {
  private ctx: CanvasRenderingContext2D;
  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (ctx as any).mozImageSmoothingEnabled = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (ctx as any).webkitImageSmoothingEnabled = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (ctx as any).msImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
  }

  render(): void {
      console.log('dsd')
          this.ctx.drawImage(
            jollyRogerImage,
            10,
            10,
            200,
            200
          );
  }
}
