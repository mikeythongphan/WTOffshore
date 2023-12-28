export class DrillWellModel {

  /**
   * 
   * @param {*} srcObj 
   * @returns 
   */
  toRemoteObj = srcObj => {

    const obj = {...srcObj};
    if (obj.waterDepth == '') obj.waterDepth = null;
    else obj.waterDepth = parseInt(obj.waterDepth);

    if (obj.wi == '') obj.wi = null;
    else obj.wi = parseFloat(obj.wi);

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
      reservoir: '',
      wellProject: '',
      responsiblePartyId: 0,
      geologistId: 0,
      waterDepth: '',
      budgetYearId: 0,
      budgetCategoryId: 0,
      projectClassificationId: 0,
      projectMaturityId: 0,
      wi: '',
      leaseExpiration: '',
      screeningEconomics: '',
      technicalEvaluation: '',
      peerReview: '',
      afeQualityCost: '',
      technicalReview: '',
      executiveManagementReview: '',
      regulatorySubmit: '',
      regulatoryApproval: '',
      afeApprovalTarget: '',
      afe: '',
      anticipatedIP: '',
      comments: '',
      executeFirstSpend: ''
    }
  }
}

export const drillWellModel = new DrillWellModel();