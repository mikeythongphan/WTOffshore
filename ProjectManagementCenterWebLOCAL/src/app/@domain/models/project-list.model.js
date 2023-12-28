export class ProjectListModel {

 /**
  * 
  * @param {*} srcObj 
  * @returns 
  */
 toRemoteObj = srcObj => {

  const obj = { ...srcObj };

  if (obj.expectedVolume_NetBOE == '') obj.expectedVolume_NetBOE = null;
  else obj.expectedVolume_NetBOE = parseFloat(obj.expectedVolume_NetBOE);

  if (obj.expectedRate_NetBOED == '') obj.expectedRate_NetBOED = null;
  else obj.expectedRate_NetBOED = parseFloat(obj.expectedRate_NetBOED);

  if (obj.wi == '') obj.wi = null;
  else obj.wi = parseFloat(obj.wi);

  if (obj.lastGas_Mcf == '') obj.lastGas_Mcf = null;
  else obj.lastGas_Mcf = parseFloat(obj.lastGas_Mcf);

  if (obj.lastOil_Bbl == '') obj.lastOil_Bbl = null;
  else obj.lastOil_Bbl = parseFloat(obj.lastOil_Bbl);

  if (obj.lastWater_Bb == '') obj.lastWater_Bb = null;
  else obj.lastWater_Bb = parseFloat(obj.lastWater_Bb);

  obj.testDate = obj.testDate === '' ? null : new Date(obj.testDate);

  return obj;
 }

 /**
  * 
  * @returns 
  */
 createNew = () => {
  return {
   id: 0,
   projectCd: '',
   projectStatusId: 0,
   areaId: 0,
   fieldProspect: '',
   wellProject: '',
   budgetCategoryId: 0,
   responsiblePartyId: 0,
   reservoirEngineerId: 0,
   budgetYearId: 0,
   budgeted: '',
   expectedVolume_NetBOE: '',
   expectedRate_NetBOED: '',
   anticipatedIP: '',
   projectClassificationId: 0,
   projectMaturityId: 0,
   wi: '',
   operatorId: 0,
   wellStatusId: 0,
   technicalReview: '',
   peerReview: '',
   afeReview: '',
   permitApproval: '',
   afe: '',
   executeFirstSpend: '',
   afeQualityCost: '',
   responsiblePartyRole: '',
   productionEngineeringPeerReview: '',
   reservoirEngineeringPeerReview: '',
   screeningEconomics: '',
   technicalEvaluation: '',
   comments: '',
   createdDate: '',
   testDate: '',
   commercialReadiness: '',
   lastOil_Bbl: '',
   lastGas_Mcf: '',
   lastWater_Bb: '',
   rio_ID: '',
   nsaI_PNP: '',
   nsaI_PRB: '',
   nsaI_POS: '',
   modifiedBy: '',
   modifiedOn: ''
  }
 }
}

export const projectListModel = new ProjectListModel();