import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Typography } from "@mui/material"
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

import { DrillWellCommentAdd } from "./drill-well-comment.add"
import { DrillWellCommentEdit } from "./drill-well-comment.edit"
import { DrillWellCommentDelete } from "./drill-well-comment.delete"
import { DrillWellCommentTable } from "./drill-well-comment.table"
import { drillWellCommentModel } from 'src/app/@domain/models/drill-well-comment.model';

export const DrillWellComment = props => {

  const { readonly, local, parentObj } = props;
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [commentID, setCommentID] = useState(0);

  const formEls = useForm({
    mode: 'onChange',
    defaultValues: {},
  });

  const { reset } = formEls;

  /**
   * 
   */
  const getNextID = () => {
    const nextID = commentID - 1;
    setCommentID(nextID);
    return nextID;
  }

  /**
   * 
   */
  const onAdd = () => {
    reset(drillWellCommentModel.create());
    setOpenAdd(true);
  }

  return <>
    <div className="flex">
      <div style={{ paddingTop: 5, marginBottom: 8 }}>
        <Typography className="md:text-18 tracking-tight font-bold">
          Comments
        </Typography>
      </div>
      <div style={{ flex: 1, textAlign: 'right' }}>
        {
          !openAdd && !openEdit && !openDelete && !readonly &&
          <Button variant="contained" color="secondary" size="small" onClick={onAdd}
            startIcon={<FuseSvgIcon>heroicons-outline:plus</FuseSvgIcon>}>
            Add
          </Button>

        }
      </div>
    </div>
    {
      openAdd &&
      <DrillWellCommentAdd
        formEls={formEls}
        open={openAdd} setOpen={setOpenAdd}
        getNextID={getNextID}
        local={local}
        parentObj={parentObj}
      />
    }
    {
      openEdit &&
      <DrillWellCommentEdit
        formEls={formEls}
        open={openEdit} setOpen={setOpenEdit}
        local={local}
        parentObj={parentObj}
      />
    }
    {
      openDelete &&
      <DrillWellCommentDelete
        formEls={formEls}
        open={openDelete} setOpen={setOpenDelete}
        getNextID={getNextID} />
    }
    {
      !openAdd && !openEdit && !openDelete &&
      <DrillWellCommentTable
        formEls={formEls}
        setOpenAdd={setOpenAdd}
        setOpenEdit={setOpenEdit}
        setOpenDelete={setOpenDelete}
        getNextID={getNextID}
        readonly={readonly}
      />
    }

  </>
}