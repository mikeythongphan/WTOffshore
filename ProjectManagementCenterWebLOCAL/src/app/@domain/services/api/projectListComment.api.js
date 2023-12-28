import { APIBase } from "./@base.api";

export class ProjectListCommentApi extends APIBase {

 /**
  * 
  */
 constructor(context) {
  super(context);
  this.endPoints = {
   insert: 'ProjectListComment/Insert',
   update: 'ProjectListComment/Update',
   delete: 'ProjectListComment/Delete',
   get: 'ProjectListComment/get',
   getAll: 'ProjectListComment/GetAll',
  };

 }
}