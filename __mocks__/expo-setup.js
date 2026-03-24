// Prevent expo winter runtime lazy getters from triggering
// module loads outside of test scope (Expo 55 / jest-expo compatibility fix)
Object.defineProperty(global, '__ExpoImportMetaRegistry', {
  get: () => ({ url: null }),
  set: () => {},
  configurable: true,
});
