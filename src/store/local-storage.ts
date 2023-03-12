export class LocalStorageService {
  setItem(key: string, value: string | undefined) {
    if (!key || !value) {
      throw new Error(
        "Local storage service error. One or more parameters was not provided when try setItem."
      );
    }

    localStorage.setItem(key, value);
  }

  getItem(key: string) {
    if (!key) {
      throw new Error(
        "Local storage service error. Key parameter must have informed."
      );
    }

    return localStorage.getItem(key);
  }
}
