# Aplicación Móvil Calculadora QR

## Especificaciones Técnicas

- **Framework:** React Native
- **Plataformas:** Android y iOS
- **Lenguaje:** TypeScript
- **Dependencias principales:**
  - react-native-camera (para escaneo de QR)
  - react-navigation (para navegación entre pantallas)
  - Formik y Yup (para validación de formularios)

## Funcionalidades

- **Conversión de Tasas:**
  - Formulario para ingresar la Tasa Efectiva Anual (TEA).
  - Conversión automática a Tasa Efectiva Mensual (TEM).
  - Conversión automática a Tasa Efectiva Diaria (TED).
  - Visualización de los resultados en pantalla.

- **Escaneo de Código QR:**
  - Acceso a la cámara del dispositivo.
  - Formulario para iniciar el escaneo de un código QR.
  - Visualización del contenido escaneado.

## Instalación

1. Clona el repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Usa `npx react-native run-android` o `npx react-native run-ios` para iniciar la aplicación.

## Uso

- Selecciona la opción de conversión de tasas para calcular TEM y TED a partir de la TEA.
- Selecciona la opción de escaneo QR para leer códigos QR usando la cámara.

## Licencia

MIT

## Scripts auxiliares

Incluyo un script para decodificar el keystore Android desde base64 y probar firma localmente:

- `scripts/decode-keystore.sh`: decodifica `ANDROID_KEYSTORE_BASE64` (o un archivo `.b64`) a un `.jks` y opcionalmente firma APK/AAB.

Ejemplo:

```bash
# desde variable de entorno
ANDROID_KEYSTORE_BASE64="$KH_BASE64" ./scripts/decode-keystore.sh --out /tmp/keystore.jks --sign-apk path/to/app-release.apk --alias myalias --storepass storepass --keypass keypass

# desde archivo base64
./scripts/decode-keystore.sh --in my-keystore.b64 --out ./keystore.jks --sign-apk path/to/app-release.apk --alias myalias --storepass storepass --keypass keypass
```

Nota: necesitas `zipalign`, `apksigner` y `jarsigner` en tu PATH para usar las funciones de firma.
