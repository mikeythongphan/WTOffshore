export class ProjectListCommentModel {

 /**
  * 
  * @param {*} srcObj
  * @returns 
  */
 toLocalObj = srcObj => {

  const obj = { ...srcObj };
  obj.commentDate = obj.commentDate !== null ? new Date(obj.commentDate).toLocaleDateString('en-US') : '';

  return obj;

 }

 /**
  * 
  * @param {*} srcObj
  * @returns 
  */
 toRemoteObj = srcObj => {

  const obj = { ...srcObj };
  obj.projectListId = obj.projectListId === '' ? null : parseInt(obj.projectListId);
  obj.commentDate = obj.commentDate === '' ? null : new Date(obj.commentDate);
  obj.commentIdx = obj.commentIdx === '' ? null : parseInt(obj.commentIdx);
  obj.modifiedBy = 'admin';
  obj.modifiedOn = new Date();

  return obj;

 }

 /**
  * 
  * @param {*} srcObjs 
  * @returns 
  */
 toRemoteObjs = srcObjs => {

  const objs = [...srcObjs];
  for (let i = 0; i < objs.length; i++) {
   objs[i] = this.toRemoteObj(objs[i]);
  }

  return objs;

 }

 /**
  * 
  * @returns 
  */
 create = () => {
  return {
   id: '',
   projectListId: '',
   comment: '',
   commentDate: new Date().toLocaleDateString('en-US'),
   commentIdx: '',
   commentSrc: '',
   modifiedBy: '',
   modifiedOn: new Date().toLocaleDateString('en-US'),
  }
 }

 /**
  * 
  * @param {*} srcObj 
  * @returns 
  */
 editFrom = srcObj => {
  const obj = { ...srcObj };
  for (const prop in obj) {
   if (obj[prop] === null) obj[prop] = '';
  }
  return obj;
 }

}

export const projectListCommentModel = new ProjectListCommentModel();