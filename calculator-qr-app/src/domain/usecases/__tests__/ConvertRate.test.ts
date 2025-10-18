import { ConvertRate } from '../ConvertRate';

describe('ConvertRate', () => {
  it('convierte TEA a TEM correctamente', () => {
    const tea = 0.12;
    const tem = ConvertRate.teaToTem(tea);
    expect(tem).toBeCloseTo(Math.pow(1 + tea, 1 / 12) - 1);
  });

  it('convierte TEA a TED correctamente', () => {
    const tea = 0.12;
    const ted = ConvertRate.teaToTed(tea);
    expect(ted).toBeCloseTo(Math.pow(1 + tea, 1 / 360) - 1);
  });

  it('convierte TEA a objeto Rate correctamente', () => {
    const tea = 0.12;
    const rate = ConvertRate.convert(tea);
    expect(rate.tea).toBe(tea);
    expect(rate.tem).toBeCloseTo(ConvertRate.teaToTem(tea));
    expect(rate.ted).toBeCloseTo(ConvertRate.teaToTed(tea));
  });
});
