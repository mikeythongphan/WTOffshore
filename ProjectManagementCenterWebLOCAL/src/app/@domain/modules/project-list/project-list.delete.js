import { useContext } from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FormProvider } from 'react-hook-form';
import { TextInput } from 'src/app/@core/forms/components/text-input';
import { SelectInput } from 'src/app/@core/forms/components/select-input';
import { Divider } from 'primereact/divider';
import { DomainContext } from 'src/app/@domain/contexts/domain.context';
import { ModuleContext } from 'src/app/@domain/contexts/module.context';
import { FloatInput } from 'src/app/@core/forms/components/float-input';
import { TextArea } from 'src/app/@core/forms/components/text-area';
import { DatePicker } from 'src/app/@core/forms/components/date-picker';
import { ProjectListComment } from './project-list-comment/@project-list-comment';

export const ProjectListDelete = props => {

 const { open, setOpen } = props;

 const { api, dropdown, spinner } = useContext(DomainContext)
 const { comments, frmModel, loadModelDataFunc } = useContext(ModuleContext);
 const { control, getValues } = frmModel();

 /**
  * 
  */
 const onClose = () => {
  setOpen(false);
 }

 /**
  * 
  */
 const onSubmit = () => {

  spinner.show();
  const obj = getValues();
  api.projectListApi.delete(obj.id).then(result => {
   loadModelDataFunc();
   comments([]);
   setOpen(false);
  }).finally(() => spinner.hide());
 }

 return <Dialog fullScreen style={{ margin: 'auto', maxWidth: 1000, maxHeight: 800 }}
  open={open}
  onClose={onClose}
  scroll='paper'
  aria-labelledby="scroll-dialog-title"
  aria-describedby="scroll-dialog-description">
  <DialogTitle id="scroll-dialog-title">
   <div style={{ display: 'flex' }}>
    <div className="danger" style={{ width: '30%' }}>Delete Project List</div>
    <div className="danger" style={{ flex: 1, textAlign: 'left', fontSize: '.75em', paddingTop: 3 }}>
     This project list can not be recovered. Are you sure?
    </div>
   </div>
  </DialogTitle>
  <DialogContent dividers={true}>
   <FormProvider {...frmModel()}>
    <div>
     <div className="flex -mx-4">
      <TextInput id="projectCd" label="Project Code" control={control} disabled={true} />
      <TextInput id="fieldProspect" label="Field Prospect" control={control} disabled={true} />
      <TextInput id="wellProject" label="Well Project" control={control} disabled={true} />
      <TextInput id="budgeted" label="Budgeted" control={control} disabled={true} />
     </div>
     <div className="flex -mx-4">
      <FloatInput id="expectedVolume_NetBOE" label="Expected Volume NetBOE" control={control} disabled={true} />
      <FloatInput id="expectedRate_NetBOED" label="Expected Rate NetBOED" control={control} disabled={true} />
      <TextInput id="afeReview" label="Afe Review" control={control} disabled={true} />
      <TextInput id="permitApproval" label="Permit Approval" control={control} disabled={true} />
     </div>
     <div className="flex -mx-4">
      <TextInput id="responsiblePartyRole" label="Responsible Party Role" control={control} disabled={true} />
      <TextInput id="productionEngineeringPeerReview" label="Production Engineering Peer Review" control={control} disabled={true} />
      <TextInput id="reservoirEngineeringPeerReview" label="Reservoir Engineering Peer Review" control={control} disabled={true} />
      <TextInput id="screeningEconomics" label="Screening Economics" control={control} disabled={true} />
     </div>
     <div className="flex -mx-4">
      <TextInput id="commercialReadiness" label="Commercial Readiness" control={control} disabled={true} />
      <TextInput id="rio_ID" label="Rio ID" control={control} disabled={true} />
      <DatePicker id="testDate" label="Test Date" control={control} disabled={true} />
      <FloatInput id="lastOil_Bbl" label="Last Oil Bbl" control={control} disabled={true} />
     </div>
     <div className="flex -mx-4">
      <FloatInput id="lastGas_Mcf" label="Last Gas Mcf" control={control} disabled={true} />
      <FloatInput id="lastWater_Bb" label="Last Water Bb" control={control} disabled={true} />
      <TextInput id="nsaI_PNP" label="NSAI PNP" control={control} disabled={true} />
      <TextInput id="nsaI_PRB" label="NSAI PRB" control={control} disabled={true} />
     </div>
     <div className="flex -mx-4">
      <TextInput id="nsaI_POS" label="NAI POS" control={control} disabled={true} />
      <FloatInput id="wi" label="WI" control={control} disabled={true} />
      <TextInput id="technicalEvaluation" label="Technical Evaluation" control={control} disabled={true} />
      <TextInput id="peerReview" label="Peer Review" control={control} disabled={true} />
     </div>
     <div className="flex -mx-4">
      <TextInput id="technicalReview" label="Technical Review" control={control} disabled={true} />
      <TextInput id="executeFirstSpend" label="Execute First Spend" control={control} disabled={true} />
      <TextInput id="anticipatedIP" label="Anticipated IP" control={control} disabled={true} />
      <TextInput id="afe" label="AFE" control={control} disabled={true} />
     </div>
     <div className="flex -mx-4">
      <TextInput id="afeQualityCost" label="Afe Quality Cost" control={control} disabled={true} />
     </div>
     <div className="flex -mx-4">
      <TextArea id="comments" label="Comments" control={control} disabled={true} />
     </div>
     <hr />
     <div className="flex -mx-4" style={{ marginTop: 10 }}>
      <SelectInput id="reservoirEngineerId" label="Reservoir Engineer" control={control} items={dropdown().reservoirEngineers} disabled={true} />
      <SelectInput id="operatorId" label="Operator" control={control} items={dropdown().operators} disabled={true} />
      <SelectInput id="wellStatusId" label="Well Status" control={control} items={dropdown().wellStatuses} disabled={true} />
     </div>
     <div className="flex -mx-4" style={{ marginTop: 10 }}>
      <SelectInput id="projectStatusId" label="Project Status" control={control} items={dropdown().projectStatuses} disabled={true} />
      <SelectInput id="areaId" label="Area" control={control} items={dropdown().areas} disabled={true} />
      <SelectInput id="responsiblePartyId" label="Responsible Party" control={control} items={dropdown().responsibleParties} disabled={true} />
     </div>
     <div className="flex -mx-4">
      <SelectInput id="budgetYearId" label="Budget Year" control={control} items={dropdown().budgetYears} disabled={true} />
      <SelectInput id="budgetCategoryId" label="Budget Category" control={control} items={dropdown().budgetCategories} disabled={true} />
      <SelectInput id="projectClassificationId" label="Project Classification" control={control} items={dropdown().projectClassifications} disabled={true} />
      <SelectInput id="projectMaturityId" label="Project Maturity" control={control} items={dropdown().projectMaturities} disabled={true} />
     </div>
    </div>
   </FormProvider>
   <Divider />
   <ProjectListComment readonly={true} />
   <br />
   <Divider />
   <br />
  </DialogContent>
  <DialogActions>
   <Button onClick={onClose}>Cancel</Button>
   <Button onClick={onSubmit} className="danger">Delete</Button>
  </DialogActions>
 </Dialog>
}