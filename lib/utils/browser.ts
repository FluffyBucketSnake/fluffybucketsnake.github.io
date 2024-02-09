const ANDROID_REGEX = /Android/;

export function isAndroid() {
  return ANDROID_REGEX.test(navigator.userAgent);
}
