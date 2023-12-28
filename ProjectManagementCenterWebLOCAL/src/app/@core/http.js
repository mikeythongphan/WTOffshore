import { STORAGE_TOKEN } from "./global-vars";
import { fail } from './common'

export const http = {

  /**
   *
   * @param {any} url
   */
  post: async (url, data) => {
    const baseUrl = process.env.REACT_APP_API_URL;

    try {
      const res = await fetch(baseUrl + url, {
        method: 'POST',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      return result;
    } catch (err) {
      console.error(`Http::post:: Fail to fetch url: ${url}`, err);
      // errorMsgBox.show("Internal error occurs. Please contact support.");
      throw err;
    }
  },

  /**
   *
   * @param {any} url
   */
  postAsync: async (url, data) => {

    const baseUrl = process.env.REACT_APP_API_URL;

    try {
      const res = await fetch(baseUrl + url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "omit",
        redirect: "follow",
        referrer: "no-referrer",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return await res.json();
    } catch (err) {
      console.error(`Http::post:: Fail to fetch url: ${url}`, err);
      throw err;
    }
  },

  /**
   *
   * @param {any} url
   */
  get: url => {

    const baseUrl = process.env.REACT_APP_API_URL;

    try {
      const promise = fetch(baseUrl + url)
        .then(res => {
          if (res.ok) {
            const result = res.json();
            return result;
          }
          return fail('apiBase::get::respoonse.ok = false');
        });
      return promise
    } catch (err) {
      console.error(`Http::get:: Fail to fetch url: ${url}`, err);
      throw err;
    }
  },

  /**
   *
   * @param {any} url
   */
  getAsync: async url => {

    const baseUrl = process.env.REACT_APP_API_URL;

    try {
      const res = await fetch(baseUrl + url);
      if (!res.ok) throw res.error();
      return (await res.json()).data;

    } catch (err) {
      console.error(`Http::get:: Fail to fetch url: ${url}`, err);
      throw err;
    }
  },

  /**
   * 
   * @param {*} url 
   * @param {*} params 
   */
  downloadChunk: (url, params) => {

    const baseUrl = process.env.REACT_APP_API_URL;

    const promise = fetch(baseUrl + url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "omit",
      redirect: "follow",
      referrer: "no-referrer",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
      .then(res => res.blob())
      .catch(err => {
        console.error(`http::downloadChunk::ERROR::${url}`, err);
        throw err;
      })
    return promise

  },

  /**
   * 
   * @param {*} url 
   * @returns 
   */
  download: url => {

    const baseUrl = process.env.REACT_APP_API_URL;

    try {
      const promise = fetch(baseUrl + url)
        .then(res => res.blob())
      return promise
    } catch (err) {
      console.error(`Http::download:: Fail to fetch url: ${url}`, err);
      throw err;
    }
  },

  /**
   *
   * @param {any} url
   */
  upload: async (url, data) => {
    const baseUrl = process.env.REACT_APP_API_URL;

    try {
      const res = await fetch(baseUrl + url, {
        method: 'POST',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      });
      const result = await res.json();
      return result;
    } catch (err) {
      console.error(`Http::post:: Fail to fetch url: ${url}`, err);
      throw err;
    }
  },


};

export default http;
