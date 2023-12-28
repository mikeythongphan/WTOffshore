import { useContext, useEffect, useState } from 'react';
import _ from '@lodash';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import FuseSvgIcon from 'src/@fuse/core/FuseSvgIcon';
import { motion } from 'framer-motion';
import ProjectListTableHead from './project-list.table-head';
import { ProjectListEdit } from './project-list.edit';
import { ProjectListDelete } from './project-list.delete';
import { projectListForeignKeysConst } from 'src/app/@domain/consts/project-list.foreignKeys.const';
import { isUoN } from 'src/app/@core/common';
import { Truncate } from 'src/app/@core/forms/components/truncate';
import { NoWrapControl } from 'src/app/@core/forms/components/no-wrap-control';
import { NoWrapText } from 'src/app/@core/forms/components/no-wrap-text';
import { DomainContext } from 'src/app/@domain/contexts/domain.context';
import { ModuleContext } from 'src/app/@domain/contexts/module.context';

export const ProjectListTable = props => {

  const { gvItems, setGvItems } = props;

  const { api, spinner } = useContext(DomainContext)
  const formContext = useContext(ModuleContext);
  const { comments, frmModel, moduleGvData, page, searchText, rowsPerPage } = useContext(ModuleContext);
  const { reset } = frmModel();

  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [order, setOrder] = useState({ direction: 'asc', id: null });
  const [currentObj, setCurrentObj] = useState(null);

  /**
   * 
   */
  useEffect(() => {

    if (searchText().length !== 0) {

      const result = moduleGvData().filter(item => {

        if (isUoN(item)) return false;

        let projectCd = false;
        let projectStatus = false;

        if (!isUoN(item.projectCd)) projectCd = item.projectCd.toLowerCase().includes(searchText().toLowerCase());
        if (!isUoN(item.projectStatus)) projectStatus = item.projectStatus.toLowerCase().startsWith(searchText().toLowerCase());

        return projectCd | projectStatus;

      });

      setGvItems(result);
      page(0);

    } else {
      setGvItems(moduleGvData());
    }

  }, [searchText()]);

  /**
   * 
   * @param {*} event 
   * @param {*} property 
   */
  function onSort(event, property) {

    const id = property;
    let direction = 'desc';
    if (order.id === property && order.direction === 'desc') direction = 'asc';
    setOrder({ direction, id });

  }

  /**
   * 
   * @param {*} id 
   */
  const onEdit = async id => {

    spinner.show();
    api.projectListApi.get(id).then(result => {
      const obj = loadCurrentObj(result);
      reset(obj);
      comments(obj.projectListComments);
      setOpenEdit(true);
    }).finally(() => spinner.hide());

  }

  /**
   * 
   * @param {*} id 
   */
  const onDelete = async id => {

    spinner.show();
    api.projectListApi.get(id).then(result => {
      const obj = loadCurrentObj(result);
      reset(obj);
      comments(obj.projectListComments);
      setOpenDelete(true);
    }).finally(() => spinner.hide());

  }

  /**
   * 
   * @param {*} obj 
   * @returns 
   */
  const loadCurrentObj = obj => {

    const result = { ...obj };
    for (const prop of Object.keys(result)) {
      if (result[prop] == null) {
        if (projectListForeignKeysConst.includes(prop)) result[prop] = 0;
        else result[prop] = '';
      }
    }
    setCurrentObj(result);

    return result;

  }

  if (isUoN(gvItems) || gvItems.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          No data found
        </Typography>
      </motion.div>
    );
  }

  return (
    <div className="w-full flex flex-col min-h-full">
      <Table stickyHeader className="min-w-xl" size="small" aria-labelledby="tableTitle">
        <ProjectListTableHead
          order={order}
          onRequestSort={onSort}
          rowCount={gvItems.length} />

        <TableBody>
          {_.orderBy(
            gvItems,
            [
              (o) => {
                switch (order.id) {
                  case 'categories': {
                    return o.categories[0];
                  }
                  default: {
                    return o[order.id];
                  }
                }
              },
            ],
            [order.direction]
          )
            .slice(page() * rowsPerPage(), page() * rowsPerPage() + rowsPerPage())
            .map((n) => {
              return (
                <TableRow hover tabIndex={-1} key={n.id}>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="center">
                    <NoWrapControl>
                      <FuseSvgIcon className="text-48 cursor-pointer" size={24} color="action" onClick={() => onEdit(n.id)}>material-solid:edit</FuseSvgIcon>
                      <FuseSvgIcon className="text-48 cursor-pointer" size={24} color="action" onClick={() => onDelete(n.id)}>material-solid:delete</FuseSvgIcon>
                    </NoWrapControl>
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="center">
                    {n.id}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="center">
                    {n.projectCd}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="center">
                    <NoWrapText text={n.projectStatus} />
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="left">
                    <NoWrapText text={n.area} />
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="left">
                    <NoWrapText text={n.fieldProspect} />
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="left">
                    <NoWrapText text={n.wellProject} />
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="left">
                    {n.budgetCategory}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="left">
                    <NoWrapText text={n.responsibleParty} />
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="right">
                    {n.reservoirEngineer}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="center">
                    {n.budgetYear}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="left">
                    {n.budgeted}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="left">
                    <Truncate text={n.expectedVolume_NetBOE} />
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="left">
                    <Truncate text={n.expectedRate_NetBOED} />
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="center">
                    {n.anticipatedIP}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="center">
                    <Truncate text={n.projectClassification} />
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="center">
                    <Truncate text={n.projectMaturity} />
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="center">
                    {n.wi}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="center">
                    {n.operator}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="center">
                    {n.wellStatus}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="center">
                    {n.technicalReview}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="center">
                    {n.peerReview}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="center">
                    {n.afeReview}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="center">
                    {n.permitApproval}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="center">
                    {n.afe}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="left">
                    {n.executeFirstSpend}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="center">
                    {n.afeQualityCost}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top cell-border-right" component="th" scope="row" align="left">
                    <Truncate text={n.responsiblePartyRole} />
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top" component="th" scope="row" align="left">
                    {n.productionEngineeringPeerReview}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top" component="th" scope="row" align="left">
                    {n.reservoirEngineeringPeerReview}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top" component="th" scope="row" align="left">
                    {n.screeningEconomics}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top" component="th" scope="row" align="left">
                    {n.technicalEvaluation}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top" component="th" scope="row" align="left">
                    <Truncate text={n.comments} />
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top" component="th" scope="row" align="left">
                    <Truncate text={n.testDate} />
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top" component="th" scope="row" align="left">
                    {n.commercialReadiness}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top" component="th" scope="row" align="left">
                    {n.lastOil_Bbl}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top" component="th" scope="row" align="left">
                    {n.lastGas_Mcf}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top" component="th" scope="row" align="left">
                    {n.lastWater_Bb}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top" component="th" scope="row" align="left">
                    {n.rio_ID}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top" component="th" scope="row" align="left">
                    {n.nsaI_PNP}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top" component="th" scope="row" align="left">
                    {n.nsaI_PRB}
                  </TableCell>
                  <TableCell className="p-4 md:p-5 cell-border-top" component="th" scope="row" align="left">
                    {n.nsaI_POS}
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>

      <ProjectListEdit open={openEdit} setOpen={setOpenEdit} currentObj={currentObj} />
      <ProjectListDelete open={openDelete} setOpen={setOpenDelete} currentObj={currentObj} />

    </div>
  );
}