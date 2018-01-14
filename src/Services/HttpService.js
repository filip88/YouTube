import axios from 'axios';

export default class HttpService {

  constructor(route) {
    this.apiUrl = 'http://localhost:3000' + route;
  }

  get(route, params) {
    return axios.get(this.apiUrl + route + this.encodeUrl(params))
      .then((response) => {
        return response;
      })
      .catch((error) => {
        // log to sentry or simular tool
      });
  }

  post(route, data) {
    return axios.post(this.apiUrl + route, data)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        // log to sentry or simular tool
      });
  }

  put() {
    return axios.put()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        // log to sentry or simular tool
      });
  }

  delete() {
    return axios.delete()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        // log to sentry or simular tool
      });
  }

  setHeader() {
    return { "headers": {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      }
    }
  }

  encodeUrl(data: Object) {
    let encodedUrl: string = '';

    for (let property in data) {
      if(encodedUrl.length===0) encodedUrl = "?";
      encodedUrl += property + '=' + data[property] + '&';
    }
    encodedUrl = encodedUrl.length ? encodedUrl.slice(0, encodedUrl.length - 1) : encodedUrl;

    return encodedUrl;
  }
}
