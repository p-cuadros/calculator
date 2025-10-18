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

## CI / CD — GitHub Actions

Este repositorio incluye workflows de GitHub Actions para compilar, testear y generar artefactos para Android e iOS:

- `.github/workflows/android-ci.yml`: compila APK y AAB, ejecuta tests y sube los artefactos.
- `.github/workflows/ios-ci.yml`: compila, ejecuta tests, genera IPA y puede subir a TestFlight.

Secrets recomendados (configurar en el repo → Settings → Secrets and variables → Actions):

- Android:
  - `GOOGLE_PLAY_SERVICE_ACCOUNT_JSON` o `GOOGLE_PLAY_SERVICE_ACCOUNT_JSON_BASE64`: JSON de la cuenta de servicio de Google Play (para subir directamente a Play).
  - `GOOGLE_PLAY_PACKAGE_NAME`: package name del APK (p. ej. `com.example.calculator`).
  - `ANDROID_KEYSTORE_BASE64` (opcional): keystore codificado en base64 para firmar APKs en el workflow.
  - `KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD` (opcional): credenciales para firmar.

- iOS (TestFlight):
  - `APP_STORE_CONNECT_API_KEY_BASE64` (recomendado): JSON de la App Store Connect API Key codificado en base64.
  - `APP_STORE_CONNECT_API_KEY` (alternativa): JSON literal si no usas base64.
  - `APPLE_ID`: Apple ID/email (usado por fastlane).
  - `FASTLANE_APP_PASSWORD` (opcional): password de aplicación si usas sesiones de contraseña.

Cómo usar:

1. Push a `main` o crea un PR: los workflows se ejecutarán automáticamente contra `main`.
2. Desde la pestaña Actions en GitHub puedes descargar los artefactos (APK/AAB/IPA) del job `build`.
3. Para publicar automáticamente en Google Play o TestFlight, configura los secrets arriba mencionados. Si no están configurados, los jobs de publicación se saltarán y solo se subirán los artefactos.

Notas:

- El workflow iOS genera un `exportOptions.plist` por defecto si no existe; puedes añadir tu propio `calculator-qr-app/ios/exportOptions.plist` para controlar el método de export.
- Revisar y ajustar las versiones de SDK/build-tools en el workflow Android si tu `android/` usa una versión específica.
