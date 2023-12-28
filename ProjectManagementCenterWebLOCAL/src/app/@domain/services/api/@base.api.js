export class APIBase {

  constructor(context) {
    this.context = context;
    this.endPoints = [];
    this.baseUrl = process.env.REACT_APP_API_URL;
  }

  /**
   * 
   * @param {*} id 
   */
  getInitialData = () => this.httpGet(this.endPoints.getInitialData);

  /**
   * 
   * @param {*} data 
   * @returns 
   */
  insert = data => this.httpPost(this.endPoints.insert, data);

  /**
   * 
   * @param {*} data 
   * @returns 
   */
  update = data => this.httpPost(this.endPoints.update, data);

  /**
   * 
   * @param {*} id 
   * @returns 
   */
  delete = id => this.httpPost(this.endPoints.delete, id);

  /**
   * 
   * @param {*} id 
   */
  get = id => this.httpGet(`${this.endPoints.get}?id=${id}`);

  /**
   * 
   * @param {*} id 
   */
  getAll = () => this.httpGet(this.endPoints.getAll);

  /**
   *
   * @param {any} endpoint
   */
  httpGet = endpoint => {

    const promise = fetch(this.baseUrl + endpoint)
    .then(res => {
      console.log
      if (res.ok) return res.json().then(result => result.data);
    }).catch(err => {
      this.context.errorOverlay.show('Cannot connect to the server');
    });
    return promise

  }

  /**
   * 
   * @param {*} endpoint 
   * @param {*} data 
   * @returns 
   */
  httpPost = (endpoint, data) => {

    const promise = fetch(this.baseUrl + endpoint, {
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
    }).then(res => {
      if (res.ok) return res.json().then(result => result.data);
    }).catch(err => {
      this.context.errorOverlay.show('Cannot connect to the server');
    });
    return promise;

  }

}