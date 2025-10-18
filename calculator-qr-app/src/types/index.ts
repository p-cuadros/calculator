export interface RateConversionResult {
  tea: number; // Tasa Efectiva Anual
  tem: number; // Tasa Efectiva Mensual
  ted: number; // Tasa Efectiva Diaria
}

export interface QRScanResult {
  content: string; // Contenido escaneado del código QR
  format: string; // Formato del código QR
}