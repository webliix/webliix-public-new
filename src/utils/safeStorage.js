/**
 * Safe LocalStorage utility with in-memory fallback.
 * Safari (especially in Private Browsing or strict privacy mode) throws
 * a SecurityError: "The operation is insecure" whenever window.localStorage
 * is accessed. This utility ensures the app never crashes under strict privacy policies.
 */

const memoryStore = new Map();

function isStorageAvailable() {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return false;
    }
    const testKey = '__webliix_test__';
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

const canUseStorage = typeof window !== 'undefined' && isStorageAvailable();

export const safeStorage = {
  getItem: (key) => {
    if (canUseStorage) {
      try {
        return window.localStorage.getItem(key);
      } catch {
        // Fallback to memoryStore
      }
    }
    return memoryStore.has(key) ? memoryStore.get(key) : null;
  },

  setItem: (key, value) => {
    const stringVal = String(value);
    if (canUseStorage) {
      try {
        window.localStorage.setItem(key, stringVal);
        return;
      } catch {
        // Fallback to memoryStore
      }
    }
    memoryStore.set(key, stringVal);
  },

  removeItem: (key) => {
    if (canUseStorage) {
      try {
        window.localStorage.removeItem(key);
        return;
      } catch {
        // Fallback to memoryStore
      }
    }
    memoryStore.delete(key);
  },

  clear: () => {
    if (canUseStorage) {
      try {
        window.localStorage.clear();
      } catch {}
    }
    memoryStore.clear();
  }
};

export default safeStorage;
