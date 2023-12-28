import { useContext } from 'react';
import { FormProvider } from 'react-hook-form';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextInput } from 'src/app/@core/forms/components/text-input';
import { FloatInput } from 'src/app/@core/forms/components/float-input';
import { SelectInput } from 'src/app/@core/forms/components/select-input';
import { projectListModel } from 'src/app/@domain/models/project-list.model';
import { DomainContext } from 'src/app/@domain/contexts/domain.context';
import { ModuleContext } from 'src/app/@domain/contexts/module.context';
import { TextArea } from 'src/app/@core/forms/components/text-area';
import { DatePicker } from 'src/app/@core/forms/components/date-picker';
import { ProjectListComment } from './project-list-comment/@project-list-comment';
import { Divider } from 'primereact/divider';

export const ProjectListEdit = props => {

 const { open, setOpen, currentObj } = props;

 const { api, dropdown, spinner } = useContext(DomainContext)
 const { frmModel, loadModelDataFunc } = useContext(ModuleContext);
 const { control, getValues } = frmModel();

 /**
  * 
  */
 const onClose = () => {
  setOpen(false);
 };

 /**
  * 
  */
 const onSubmit = () => {

  spinner.show();
  const obj = projectListModel.toRemoteObj(getValues());
  obj.modifiedBy = 'admin';
  obj.modifiedOn = new Date();
  obj.createdDate = new Date();
  // obj.testDate = new Date();
  api.projectListApi.update(obj).then(result => {
   loadModelDataFunc();
   setOpen(false)
  }).finally(() => spinner.hide());

 }

 return <Dialog fullScreen style={{ margin: 'auto', maxWidth: 1000, maxHeight: 800 }}
  open={open}
  onClose={onClose}
  scroll='paper'
  aria-labelledby="scroll-dialog-title"
  aria-describedby="scroll-dialog-description">
  <DialogTitle id="scroll-dialog-title">
   Edit Project List
  </DialogTitle>
  <DialogContent dividers={true}>
   <FormProvider {...frmModel()}>
    <div>
     <div className="flex -mx-4">
      <TextInput id="projectCd" label="Project Code" control={control} />
      <TextInput id="fieldProspect" label="Field Prospect" control={control} />
      <TextInput id="wellProject" label="Well Project" control={control} />
      <TextInput id="budgeted" label="Budgeted" control={control} />
     </div>
     <div className="flex -mx-4">
      <FloatInput id="expectedVolume_NetBOE" label="Expected Volume NetBOE" control={control} />
      <FloatInput id="expectedRate_NetBOED" label="Expected Rate NetBOED" control={control} />
      <TextInput id="afeReview" label="Afe Review" control={control} />
      <TextInput id="permitApproval" label="Permit Approval" control={control} />
     </div>
     <div className="flex -mx-4">
      <TextInput id="responsiblePartyRole" label="Responsible Party Role" control={control} />
      <TextInput id="productionEngineeringPeerReview" label="Production Engineering Peer Review" control={control} />
      <TextInput id="reservoirEngineeringPeerReview" label="Reservoir Engineering Peer Review" control={control} />
      <TextInput id="screeningEconomics" label="Screening Economics" control={control} />
     </div>
     <div className="flex -mx-4">
      <TextInput id="commercialReadiness" label="Commercial Readiness" control={control} />
      <TextInput id="rio_ID" label="Rio ID" control={control} />
      {/* <TextInput id="testDate" label="Test Date" control={control} /> */}
      <DatePicker id="testDate" label="Test Date" control={control} />
      <FloatInput id="lastOil_Bbl" label="Last Oil Bbl" control={control} />
     </div>
     <div className="flex -mx-4">
      <FloatInput id="lastGas_Mcf" label="Last Gas Mcf" control={control} />
      <FloatInput id="lastWater_Bb" label="Last Water Bb" control={control} />
      <TextInput id="nsaI_PNP" label="NSAI PNP" control={control} />
      <TextInput id="nsaI_PRB" label="NSAI PRB" control={control} />
     </div>
     <div className="flex -mx-4">
      <TextInput id="nsaI_POS" label="NAI POS" control={control} />
      <FloatInput id="wi" label="WI" control={control} />
      <TextInput id="technicalEvaluation" label="Technical Evaluation" control={control} />
      <TextInput id="peerReview" label="Peer Review" control={control} />
     </div>
     <div className="flex -mx-4">
      <TextInput id="technicalReview" label="Technical Review" control={control} />
      <TextInput id="executeFirstSpend" label="Execute First Spend" control={control} />
      <TextInput id="anticipatedIP" label="Anticipated IP" control={control} />
      <TextInput id="afe" label="AFE" control={control} />
     </div>
     <div className="flex -mx-4">
      <TextInput id="afeQualityCost" label="Afe Quality Cost" control={control} />
     </div>
     <div className="flex -mx-4">
      <TextArea id="comments" label="Comments" control={control} />
     </div>
     <hr />
     <div className="flex -mx-4" style={{ marginTop: 10 }}>
      <SelectInput id="reservoirEngineerId" label="Reservoir Engineer" control={control} items={dropdown().reservoirEngineers} />
      <SelectInput id="operatorId" label="Operator" control={control} items={dropdown().operators} />
      <SelectInput id="wellStatusId" label="Well Status" control={control} items={dropdown().wellStatuses} />
     </div>
     <div className="flex -mx-4" style={{ marginTop: 10 }}>
      <SelectInput id="projectStatusId" label="Project Status" control={control} items={dropdown().projectStatuses} />
      <SelectInput id="areaId" label="Area" control={control} items={dropdown().areas} />
      <SelectInput id="responsiblePartyId" label="Responsible Party" control={control} items={dropdown().responsibleParties} />
     </div>
     <div className="flex -mx-4">
      <SelectInput id="budgetYearId" label="Budget Year" control={control} items={dropdown().budgetYears} />
      <SelectInput id="budgetCategoryId" label="Budget Category" control={control} items={dropdown().budgetCategories} />
      <SelectInput id="projectClassificationId" label="Project Classification" control={control} items={dropdown().projectClassifications} />
      <SelectInput id="projectMaturityId" label="Project Maturity" control={control} items={dropdown().projectMaturities} />
     </div>
    </div>
   </FormProvider>
   <Divider />
   <ProjectListComment local={false} parentObj={currentObj} readonly={false} />
   <br />
  </DialogContent>
  <DialogActions>
   <Button onClick={onClose}>Cancel</Button>
   <Button onClick={onSubmit}>Save</Button>
  </DialogActions>
 </Dialog>
}
