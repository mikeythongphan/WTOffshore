import { useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FormProvider } from 'react-hook-form';
import { TextInput } from 'src/app/@core/forms/components/text-input';
import { IntegerInput } from 'src/app/@core/forms/components/integer-input';
import { FloatInput } from 'src/app/@core/forms/components/float-input';
import { SelectInput } from 'src/app/@core/forms/components/select-input';
import { DrillWellComment } from './drill-well-comment/@drill-well-comment';
import { Divider } from 'primereact/divider';
import { drillWellCommentModel } from 'src/app/@domain/models/drill-well-comment.model';
import { drillWellModel } from 'src/app/@domain/models/drill-well.model';
import { DomainContext } from 'src/app/@domain/contexts/domain.context';
import { ModuleContext } from 'src/app/@domain/contexts/module.context';

/**
 * 
 * @param {*} props 
 * @returns 
 */
export const DrillWellAdd = props => {

  const { open, setOpen } = props;
  const { api, dropdown, spinner } = useContext(DomainContext);
  const { comments, frmModel, loadModelDataFunc } = useContext(ModuleContext);

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
    const obj = drillWellModel.toRemoteObj(getValues());
    obj.modifiedBy = 'admin';
    obj.modifiedOn = new Date();
    obj.drillWellComments = drillWellCommentModel.toRemoteObjs(comments());
    api.drillWellApi.insert(obj).then(result => {
      onClose();
      loadModelDataFunc();
      comments([]);  
    }).finally(() => spinner.hide());

  }

  return <Dialog fullScreen style={{ margin: 'auto', maxWidth: 1000, maxHeight: 800 }}
    open={open}
    onClose={onClose}
    scroll='paper'
    aria-labelledby="scroll-dialog-title"
    aria-describedby="scroll-dialog-description">
    <DialogTitle id="scroll-dialog-title">
      Add New Drill Well
    </DialogTitle>
    <DialogContent dividers={true}>
      <FormProvider {...frmModel()}>
        <div>
          <div className="flex -mx-4">
            <TextInput id="projectCd" label="Project Code" control={control} />
            <TextInput id="fieldProspect" label="Field Prospect" control={control} />
            <TextInput id="reservoir" label="Reservoir" control={control} />
            <TextInput id="wellProject" label="Well Project" control={control} />
          </div>
          <div className="flex -mx-4">
            <IntegerInput id="waterDepth" label="Water Depth" control={control} />
            <FloatInput id="wi" label="WI" control={control} />
            <TextInput id="leaseExpiration" label="Lease Expiration" control={control} />
            <TextInput id="screeningEconomics" label="Screening Economics" control={control} />
          </div>
          <div className="flex -mx-4">
            <TextInput id="technicalEvaluation" label="Technical Evaluation" control={control} />
            <TextInput id="peerReview" label="Peer Review" control={control} />
            <TextInput id="technicalReview" label="Technical Review" control={control} />
            <TextInput id="executeFirstSpend" label="Execute First Spend" control={control} />
          </div>
          <div className="flex -mx-4">
            <TextInput id="executiveManagementReview" label="ExecutiveManagementReview" control={control} />
            <TextInput id="regulatorySubmit" label="Regulatory Submit" control={control} />
            <TextInput id="regulatoryApproval" label="Regulatory Approval" control={control} />
            <TextInput id="anticipatedIP" label="Anticipated IP" control={control} />
          </div>
          <div className="flex -mx-4">
            <TextInput id="afe" label="AFE" control={control} />
            <TextInput id="afeApprovalTarget" label="Afe Approval Target" control={control} />
            <TextInput id="afeQualityCost" label="Afe Quality Cost" control={control} />
          </div>
          <hr />
          <div className="flex -mx-4" style={{ marginTop: 10 }}>
            <SelectInput id="projectStatusId" label="Project Status" control={control} items={dropdown().projectStatuses} />
            <SelectInput id="areaId" label="Area" control={control} items={dropdown().areas} />
            <SelectInput id="responsiblePartyId" label="Responsible Party" control={control} items={dropdown().responsibleParties} />
            <SelectInput id="geologistId" label="Geologist" control={control} items={dropdown().geologists} />
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
      <DrillWellComment local={true} readonly={false} />
      <br />
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onSubmit}>Create</Button>
    </DialogActions>
  </Dialog>
}
