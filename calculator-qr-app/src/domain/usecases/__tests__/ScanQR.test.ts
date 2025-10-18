import { ScanQR } from '../ScanQR';

describe('ScanQR', () => {
  it('devuelve el contenido escaneado sin modificar', () => {
    const content = 'https://ejemplo.com';
    expect(ScanQR.parse(content)).toBe(content);
  });
});
