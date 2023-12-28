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
import { TextArea } from 'src/app/@core/forms/components/text-area';
import { Divider } from 'primereact/divider';
import { DrillWellComment } from './drill-well-comment/@drill-well-comment';
import { DomainContext } from 'src/app/@domain/contexts/domain.context';
import { ModuleContext } from 'src/app/@domain/contexts/module.context';

export const DrillWellDelete = props => {

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
    api.drillWellApi.delete(obj.id).then(result => {
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
        <div className="danger" style={{ width: '30%' }}>Delete Drill Well</div>
        <div className="danger" style={{ flex: 1, textAlign: 'left', fontSize: '.75em', paddingTop: 3 }}>
          This drill well can not be recovered. Are you sure?
        </div>
      </div>
    </DialogTitle>
    <DialogContent dividers={true}>
      <FormProvider {...frmModel()}>
        <div>
          <div className="flex -mx-4">
            <TextInput id="projectCd" label="Project Code" control={control} disabled={true} />
            <TextInput id="fieldProspect" label="Field Prospect" control={control} disabled={true} />
            <TextInput id="reservoir" label="Reservoir" control={control} disabled={true} />
            <TextInput id="wellProject" label="Well Project" control={control} disabled={true} />
          </div>
          <div className="flex -mx-4">
            <TextInput id="waterDepth" label="Water Depth" control={control} disabled={true} />
            <TextInput id="wi" label="WI" control={control} disabled={true} />
            <TextInput id="leaseExpiration" label="Lease Expiration" control={control} disabled={true} />
            <TextInput id="screeningEconomics" label="Screening Economics" control={control} disabled={true} />
          </div>
          <div className="flex -mx-4">
            <TextInput id="technicalEvaluation" label="Technical Evaluation" control={control} disabled={true} />
            <TextInput id="peerReview" label="Peer Review" control={control} disabled={true} />
            <TextInput id="technicalReview" label="Technical Review" control={control} disabled={true} />
            <TextInput id="executeFirstSpend" label="Execute First Spend" control={control} disabled={true} />
          </div>
          <div className="flex -mx-4">
            <TextInput id="executiveManagementReview" label="ExecutiveManagementReview" control={control} disabled={true} />
            <TextInput id="regulatorySubmit" label="Regulatory Submit" control={control} disabled={true} />
            <TextInput id="regulatoryApproval" label="Regulatory Approval" control={control} disabled={true} />
            <TextInput id="anticipatedIP" label="Anticipated IP" control={control} disabled={true} />
          </div>
          <div className="flex -mx-4">
            <TextInput id="afe" label="AFE" control={control} />
            <TextInput id="afeApprovalTarget" label="Afe Approval Target" control={control} disabled={true} />
            <TextInput id="afeQualityCost" label="Afe Quality Cost" control={control} disabled={true} />
          </div>
          <hr />
          <div className="flex -mx-4" style={{ marginTop: 10 }}>
            <SelectInput id="projectStatusId" label="Project Status" control={control} items={dropdown().projectStatuses} disabled={true} />
            <SelectInput id="areaId" label="Area" control={control} items={dropdown().areas} disabled={true} />
            <SelectInput id="responsiblePartyId" label="Responsible Party" control={control} items={dropdown().responsibleParties} disabled={true} />
            <SelectInput id="geologistId" label="Geologist" control={control} items={dropdown().geologists} disabled={true} />
          </div>
          <div className="flex -mx-4">
            <SelectInput id="budgetYearId" label="Budget Year" control={control} items={dropdown().budgetYears} disabled={true} />
            <SelectInput id="budgetCategoryId" label="Budget Category" control={control} items={dropdown().budgetCategories} disabled={true} />
            <SelectInput id="projectClassificationId" label="Project Classification" control={control} items={dropdown().projectClassifications} disabled={true} />
            <SelectInput id="projectMaturityId" label="Project Maturity" control={control} items={dropdown().projectMaturities} disabled={true} />
          </div>
          <div className="flex -mx-4">
            <TextArea id="comments" label="Comments" control={control} />
          </div>
        </div>
      </FormProvider>
      <Divider />
      <DrillWellComment readonly={true} />
      <br />
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onSubmit} className="danger">Delete</Button>
    </DialogActions>
  </Dialog>
}
