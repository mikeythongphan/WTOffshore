import { useContext } from 'react';
import { Button, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { IntegerInput } from 'src/app/@core/forms/components/integer-input';
import { TextInput } from 'src/app/@core/forms/components/text-input';
import { DomainContext } from 'src/app/@domain/contexts/domain.context';
import { ModuleContext } from 'src/app/@domain/contexts/module.context';

export const DrillWellCommentDelete = props => {

  const { formEls, setOpen, local } = props;
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

    const obj = getValues();
    if (!local) {
      spinner.show();
      api.drillWellCommentApi.delete(obj.id)
        .then(() => submitLocal(obj))
        .finally(() => spinner.hide());
    }
    else submitLocal(obj);

  }

  /**
   * 
   * @param {*} obj 
   */
  const submitLocal = obj => {
    const objs = comments().filter(x => x.id !== obj.id);
    comments(objs);
    setOpen(false);
  }

  return <div style={{ border: '1px solid #e7e7e7', borderRadius: 10, padding: '5px 20px 5px 20px', marginBottom: 10 }}>
    <div className="flex">
      <div style={{ display: 'flex', width: '70%', paddingTop: 5 }}>
        <Typography className="md:text-14 tracking-tight font-bold danger" style={{ marginTop: 3 }}>
          Delete Comment
        </Typography>
        <div className="danger" style={{ flex: 1, textAlign: 'right', paddingTop: 3 }}>
          This comment can not be recovered. Are you sure?
        </div>
      </div>
      <div style={{ flex: 1, textAlign: 'right' }}>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={onSubmit} className="danger">Delete</Button>
      </div>
    </div>
    <FormProvider {...formEls}>
      <div className="flex -mx-4">
        <TextInput id="comment" label="Comment" control={control} disabled={true} />
        <TextInput id="commentDate" label="Comment Date" control={control} disabled={true} />
        <IntegerInput id="commentIdx" label="Comment Index" control={control} disabled={true} />
        <TextInput id="commentSrc" label="Comment Source" control={control} disabled={true} />
      </div>
    </FormProvider>
  </div>
}