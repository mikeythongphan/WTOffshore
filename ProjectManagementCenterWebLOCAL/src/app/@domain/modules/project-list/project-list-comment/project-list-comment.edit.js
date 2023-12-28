import { useContext } from 'react';
import { Button, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { TextInput } from 'src/app/@core/forms/components/text-input';
import { IntegerInput } from 'src/app/@core/forms/components/integer-input';
import { Hidden } from 'src/app/@core/forms/components/hidden';
import { projectListCommentModel } from 'src/app/@domain/models/project-list-comment.model';
import { DomainContext } from 'src/app/@domain/contexts/domain.context';
import { ModuleContext } from 'src/app/@domain/contexts/module.context';

export const ProjectListCommentEdit = props => {

 const { formEls, open, setOpen, local } = props;
 const { control, getValues } = formEls;

 const { api, spinner } = useContext(DomainContext)
 const { comments } = useContext(ModuleContext);

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

  const obj = projectListCommentModel.toRemoteObj(getValues());
  if (!local) submitRemote(obj);
  else submitLocal(obj);

 }

 /**
  * 
  * @param {*} obj 
  */
 const submitRemote = obj => {

  spinner.show();
  const remoteObj = projectListCommentModel.toRemoteObj(obj);
  api.projectListCommentApi.update(remoteObj).then(() => {
   submitLocal(obj);
  }).finally(() => spinner.hide());

 }

 /**
  * 
  * @param {*} obj 
  */
 const submitLocal = obj => {

  obj = projectListCommentModel.toLocalObj(obj);
  const objs = [...comments()];
  for (let i = 0; i < objs.length; i++) {
   if (objs[i].id != obj.id) continue;
   objs[i] = { ...obj };
   break;
  }

  comments(objs);
  setOpen(false);

 }

 return <div style={{ border: '1px solid #e7e7e7', borderRadius: 10, padding: '5px 20px 5px 20px', marginBottom: 10 }}>
  <div className="flex">
   <div style={{ paddingTop: 8 }}>
    <Typography className="md:text-14 tracking-tight font-bold">
     Edit Comment
    </Typography>
   </div>
   <div style={{ flex: 1, textAlign: 'right' }}>
    <Button onClick={onClose}>Close</Button>
    <Button onClick={onSubmit}>Save</Button>
   </div>
  </div>
  <FormProvider {...formEls}>
   <div className="flex -mx-4">
    <Hidden>
     <TextInput id="id" label="ID" control={control} />
    </Hidden>
    <TextInput id="comment" label="Comment" control={control} />
    <TextInput id="commentDate" label="Comment Date" control={control} disabled={true} />
    <IntegerInput id="commentIdx" label="Comment Index" control={control} />
    <TextInput id="commentSrc" label="Comment Source" control={control} />
   </div>
  </FormProvider>
 </div>
}