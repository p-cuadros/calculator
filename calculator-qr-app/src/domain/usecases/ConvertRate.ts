import { Rate } from '../entities/Rate';

export class ConvertRate {
  static teaToTem(tea: number): number {
    return Math.pow(1 + tea, 1 / 12) - 1;
  }

  static teaToTed(tea: number): number {
    return Math.pow(1 + tea, 1 / 360) - 1;
  }

  static convert(tea: number): Rate {
    return {
      tea,
      tem: ConvertRate.teaToTem(tea),
      ted: ConvertRate.teaToTed(tea),
    };
  }
}
