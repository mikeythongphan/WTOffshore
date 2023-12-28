import { useContext } from 'react';
import FuseSvgIcon from 'src/@fuse/core/FuseSvgIcon';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { NoWrapControl } from 'src/app/@core/forms/components/no-wrap-control';
import { drillWellCommentModel } from 'src/app/@domain/models/drill-well-comment.model';
import { Hidden } from 'src/app/@core/forms/components/hidden';
import { ModuleContext } from 'src/app/@domain/contexts/module.context';

export const DrillWellCommentTable = props => {

  const { formEls, setOpenAdd, setOpenEdit, setOpenDelete, readonly } = props;
  const { reset } = formEls;

  const { comments } = useContext(ModuleContext);

  /**
   * 
   * @param {*} id 
   */
  const onEdit = obj => {
    reset(drillWellCommentModel.editFrom(obj));
    setOpenAdd(false);
    setOpenEdit(true);
    setOpenDelete(false);
  }

  /**
   * 
   * @param {*} id 
   */
  const onDelete = obj => {
    reset(drillWellCommentModel.editFrom(obj));
    setOpenAdd(false);
    setOpenEdit(false);
    setOpenDelete(true);
  }

  /**
   * 
   * @param {*} rowData 
   * @param {*} options 
   * @returns 
   */
  const actionsTemplate = (row) => {

    return <NoWrapControl>
      <FuseSvgIcon className="text-48 cursor-pointer" size={24} color="action" onClick={() => onEdit(row)}>material-solid:edit</FuseSvgIcon>
      <FuseSvgIcon className="text-48 cursor-pointer" size={24} color="action" onClick={() => onDelete(row)}>material-solid:delete</FuseSvgIcon>
    </NoWrapControl>;
  };

  return <div className="card">
    <DataTable value={comments()} tableStyle={{ minWidth: '50rem', fontSize: 14 }}>
      {
        !readonly &&
        <Column style={{ flex: '0 0 4rem' }} body={actionsTemplate}></Column>
      }
      <Hidden>
        <Column field="id" header="ID" ></Column>
        <Column field="drillWellId" header="Drill Well ID" ></Column>
      </Hidden>
      <Column field="comment" header="Comment" ></Column>
      <Column field="commentDate" header="Comment Date"></Column>
      <Column field="commentIdx" header="Comment Index"></Column>
      <Column field="commentSrc" header="Comment Source"></Column>
    </DataTable>
  </div>
}