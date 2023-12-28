import { APIBase } from './@base.api';

export class DrillWellApi extends APIBase {

  /**
   * 
   */
  constructor(context) {
    super(context);
    this.endPoints = {
      getInitialData: 'DrillWell/GetInitialData',
      insert: 'DrillWell/Insert',
      update: 'DrillWell/Update',
      delete: 'DrillWell/Delete',
      get: 'DrillWell/get',
      getAll: 'DrillWell/GetAll',
    };
  
  }

}
