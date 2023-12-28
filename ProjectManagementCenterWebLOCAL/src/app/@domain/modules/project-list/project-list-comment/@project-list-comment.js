import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Typography } from "@mui/material"
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { ProjectListCommentAdd } from "./project-list-comment.add"
import { ProjectListCommentEdit } from "./project-list-comment.edit"
import { ProjectListCommentDelete } from "./project-list-comment.delete"
import { ProjectListCommentTable } from "./project-list-comment.table"
import { projectListCommentModel } from 'src/app/@domain/models/project-list-comment.model';

export const ProjectListComment = props => {

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
    reset(projectListCommentModel.create());
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
      <ProjectListCommentAdd
        formEls={formEls}
        open={openAdd} setOpen={setOpenAdd}
        getNextID={getNextID}
        local={local}
        parentObj={parentObj}
      />
    }
    {
      openEdit &&
      <ProjectListCommentEdit
        formEls={formEls}
        open={openEdit} setOpen={setOpenEdit}
        local={local}
        parentObj={parentObj}
      />
    }
    {
      openDelete &&
      <ProjectListCommentDelete
        formEls={formEls}
        open={openDelete} setOpen={setOpenDelete}
        local={local}
        getNextID={getNextID} />
    }
    {
      !openAdd && !openEdit && !openDelete &&
      <ProjectListCommentTable
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