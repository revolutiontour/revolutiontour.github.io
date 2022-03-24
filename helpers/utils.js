export const fetcher =  (...args) => fetch(...args).then(res => res.json())
// CUSTOM FETCHER FOR SWR
export const SwrFetcher = (url, body = {}, method = "POST") => {
    console.log(method);
    // INITIALIZE FORM DATA AND ITS AUTH PARAMS
    const {
      auth: { token }
    } = GetRootState;
    const appVersion = 1.0;
    // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InVzZXJfMV9pbW0ifQ.LW-1Uk_omCfySnPS4_Kmq4osCyLNNY4IT5-gPmVy1Wo'
    var formData = new URLSearchParams();
    formData.append("appVersion", appVersion);
    formData.append("token", token);
  
    // AUTOMATE FILL REST OF BODY TO FORMDATA
    Object.keys(body).forEach((key) => formData.append(key, body[key]));
    console.log(body);
  
    return fetch(url, {
      method,
      body: formData
    }).then((res) => {
      return res.json();
    });
  };