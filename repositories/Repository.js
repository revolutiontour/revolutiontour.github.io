import axios from 'axios';
const baseDomain = 'http://167.172.62.14/api/';
// const baseDomain = 'http://localhost:1337';


const tourifyDomain = 'http://167.172.62.14/api/';
const tourifyOld = 'https://istih.s3-id-jkt-1.kilatstorage.id/';
const authorization_prefix = 'Bearer ';

export const customHeaders = {
    Accept: 'application/json',
    /* Authorization: authorization_prefix + token || undefined*/
};

export const baseUrl = `${baseDomain}`;
export const tourifyUrl = `${tourifyDomain}`;
export const tourifyOldUrl = `${tourifyOld}`;
export const tourifyLocal = `http://localhost:3000/`

export const isAuthenticated = () => {
    const Local = localStorage.getItem(STORAGE_KEY);
    const ParseLocal = JSON.parse(Local)
    const token = Local && ParseLocal['auth'] ? ParseLocal['auth']['token']:null
    return token
  };
  
  export const setHeader = () => {
    const token = 
    ''
    // isAuthenticated()
    ;
    return {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + token,
        'X-Requested-With': 'XMLHttpRequest'
      },
    };
  }
  
  export const setFileHeader = () => {
    const token = 
    ''
    // isAuthenticated()
    ;
    return {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: 'Bearer ' + token,
        'X-Requested-With': 'XMLHttpRequest'
      },
    };
  }

export default axios.create({
    baseUrl,
    // tourifyDomain,
    // tourifyOld,
    // headers: customHeaders,
});

export const serializeQuery = query => {
    return Object.keys(query)
        .map(
            key =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
