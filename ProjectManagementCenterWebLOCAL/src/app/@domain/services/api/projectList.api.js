import { APIBase } from './@base.api';

export class ProjectListApi extends APIBase {

  /**
   * 
   */
  constructor(context) {
    super(context);
    this.endPoints = {
      getInitialData: 'ProjectList/GetInitialData',
      insert: 'ProjectList/Insert',
      update: 'ProjectList/Update',
      delete: 'ProjectList/Delete',
      get: 'ProjectList/get',
      getAll: 'ProjectList/GetAll',
    };
  
  }

}
