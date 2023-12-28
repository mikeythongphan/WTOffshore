import { useContext } from 'react';
import { FormProvider } from 'react-hook-form';
import { Button, Typography } from '@mui/material';
import { TextInput } from 'src/app/@core/forms/components/text-input';
import { IntegerInput } from 'src/app/@core/forms/components/integer-input';
import { Hidden } from 'src/app/@core/forms/components/hidden';
import { projectListCommentModel } from 'src/app/@domain/models/project-list-comment.model';
import { DomainContext } from 'src/app/@domain/contexts/domain.context';
import { ModuleContext } from 'src/app/@domain/contexts/module.context';

export const ProjectListCommentAdd = props => {

 const { formEls, setOpen, getNextID, local, parentObj } = props;

 const { api, spinner } = useContext(DomainContext)
 const { comments } = useContext(ModuleContext);

 const { control, getValues } = formEls;

 /**
  * 
  */
 const onClose = () => {
  setOpen(false);
 }

 /**
  * 
  */
 const onSubmit = async () => {
  if (local) submitLocal();
  else submitRemote();
 }

 /**
  * 
  */
 const submitRemote = () => {

  spinner.show();
  const obj = projectListCommentModel.toRemoteObj(getValues());
  obj.id = 0;
  obj.projectListId = parentObj.id;
  obj.commentDate = new Date();
  api.projectListCommentApi.insert(obj).then(result => {
   const objs = comments();
   objs.push(result);
   comments(objs);
   setOpen(false)
  }).finally(() => spinner.hide());

 }

 /**
  * 
  */
 const submitLocal = () => {

  const obj = getValues();
  obj.id = getNextID();

  const objs = comments();
  objs.push(obj);

  comments(objs);
  setOpen(false);

 }

 return <div style={{ border: '1px solid #e7e7e7', borderRadius: 10, padding: '5px 20px 5px 20px', marginBottom: 10 }}>
  <div className="flex">
   <div style={{ paddingTop: 8 }}>
    <Typography className="md:text-14 tracking-tight font-bold">
     Add New Comment
    </Typography>
   </div>
   <div style={{ flex: 1, textAlign: 'right' }}>
    <Button onClick={onClose}>Close</Button>
    <Button onClick={onSubmit}>Create</Button>
   </div>
  </div>
  <FormProvider {...formEls}>
   <div className="flex -mx-4">
    <Hidden>
     <TextInput id="id" label="ID" control={control} disabled={true} />
    </Hidden>
    <TextInput id="comment" label="Comment" control={control} />
    <TextInput id="commentDate" label="Comment Date" control={control} disabled={true} />
    <IntegerInput id="commentIdx" label="Comment Index" control={control} />
    <TextInput id="commentSrc" label="Comment Source" control={control} />
   </div>
  </FormProvider>
 </div>
}