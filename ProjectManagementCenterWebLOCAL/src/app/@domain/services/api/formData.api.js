import { APIBase } from './@base.api';

export class FormDataApi extends APIBase {

  /**
   * 
   */
  constructor(context) {
    super(context);
    this.endPoints = {
      getInitialData: 'FormData/GetInitialData',
    };
  
  }

}
