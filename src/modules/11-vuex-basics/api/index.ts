const DELAY_IN_MS = 1200;

const api = {
  ajaxCall<T>(value: T): Promise<T> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, DELAY_IN_MS);
    });
  },
};

export default api;
