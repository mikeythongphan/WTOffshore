import { APIBase } from "./@base.api";

export class DrillWellCommentApi extends APIBase {

  /**
   * 
   */
  constructor(context) {
    super(context);
    this.endPoints = {
      insert: 'DrillWellComment/Insert',
      update: 'DrillWellComment/Update',
      delete: 'DrillWellComment/Delete',
      get: 'DrillWellComment/get',
      getAll: 'DrillWellComment/GetAll',
    };
    
  }
 
}
