#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   ANDROID_KEYSTORE_BASE64="..." ./scripts/decode-keystore.sh --out /tmp/keystore.jks
#   ./scripts/decode-keystore.sh --in my-keystore.b64 --out ./keystore.jks
# Optional: --sign-apk path/to/app-release.apk --alias KEY_ALIAS --storepass PASS --keypass PASS

print_usage() {
  echo "Usage: $0 [--in base64_file] [--out keystore.jks] [--sign-apk APK_PATH] [--sign-aab AAB_PATH] --alias KEY_ALIAS --storepass STOREPASS --keypass KEYPASS"
}

IN_B64=""
OUT_JKS="/tmp/keystore.jks"
SIGN_APK=""
SIGN_AAB=""
KEY_ALIAS=""
STOREPASS=""
KEYPASS=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --in) IN_B64="$2"; shift 2;;
    --out) OUT_JKS="$2"; shift 2;;
    --sign-apk) SIGN_APK="$2"; shift 2;;
    --sign-aab) SIGN_AAB="$2"; shift 2;;
    --alias) KEY_ALIAS="$2"; shift 2;;
    --storepass) STOREPASS="$2"; shift 2;;
    --keypass) KEYPASS="$2"; shift 2;;
    -h|--help) print_usage; exit 0;;
    *) echo "Unknown arg: $1"; print_usage; exit 1;;
  esac
done

if [ -z "$IN_B64" ] && [ -z "${ANDROID_KEYSTORE_BASE64:-}" ]; then
  echo "No input base64 provided (use --in or set ANDROID_KEYSTORE_BASE64 env var)"; exit 1;
fi

if [ -n "$IN_B64" ]; then
  base64 --decode "$IN_B64" > "$OUT_JKS"
else
  echo "$ANDROID_KEYSTORE_BASE64" | base64 --decode > "$OUT_JKS"
fi

echo "Keystore written to $OUT_JKS"

if [ -n "$SIGN_APK" ]; then
  if [ -z "$KEY_ALIAS" ] || [ -z "$STOREPASS" ] || [ -z "$KEYPASS" ]; then
    echo "Signing APK requires --alias, --storepass and --keypass"; exit 1;
  fi
  echo "Signing APK: $SIGN_APK"
  if ! command -v zipalign >/dev/null 2>&1; then echo "zipalign not found in PATH"; exit 1; fi
  if ! command -v apksigner >/dev/null 2>&1; then echo "apksigner not found in PATH"; exit 1; fi
  TMP_ALIGNED=/tmp/app-release-aligned.apk
  zipalign -v -p 4 "$SIGN_APK" "$TMP_ALIGNED"
  apksigner sign --ks "$OUT_JKS" --ks-pass pass:"$STOREPASS" --ks-key-alias "$KEY_ALIAS" --key-pass pass:"$KEYPASS" --out /tmp/app-release-signed.apk "$TMP_ALIGNED"
  echo "Signed APK at /tmp/app-release-signed.apk"
  apksigner verify --print-certs /tmp/app-release-signed.apk || true
fi

if [ -n "$SIGN_AAB" ]; then
  if [ -z "$KEY_ALIAS" ] || [ -z "$STOREPASS" ] || [ -z "$KEYPASS" ]; then
    echo "Signing AAB requires --alias, --storepass and --keypass"; exit 1;
  fi
  if ! command -v jarsigner >/dev/null 2>&1; then echo "jarsigner not found in PATH"; exit 1; fi
  jarsigner -keystore "$OUT_JKS" -storepass "$STOREPASS" -keypass "$KEYPASS" "$SIGN_AAB" "$KEY_ALIAS" || true
  echo "Signed AAB (in-place): $SIGN_AAB"
  jarsigner -verify -verbose -certs "$SIGN_AAB" || true
fi

echo "Done."
