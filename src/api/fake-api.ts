const delayInMs = 1200;

const fakeApi = {
  successfulRequest(url, { params = undefined, isSilent = false, responseData = undefined } = {}) {
    if (!isSilent)
      console.log('REQUEST (successful...)', url, params);
    return new Promise(function (resolve) {
      setTimeout(function () {
        const response = {
          status: 'SUCCESS',
          url,
          data: responseData
        };
        if (!isSilent)
          console.log('RESPONSE (successful...)', response, params);
        resolve(response);
      }, delayInMs);
    });
  },

  failedRequest(url, { params = undefined, isSilent = false, errorData = undefined } = {}) {
    if (!isSilent)
      console.log('REQUEST (failed...)', url, params);
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        const response = {
          status: 'ERROR',
          url,
          error: errorData
        };
        if (!isSilent)
          console.log('RESPONSE (successful...)', response, params);
        reject(response);
      }, delayInMs);
    });
  },
};

export default fakeApi;
