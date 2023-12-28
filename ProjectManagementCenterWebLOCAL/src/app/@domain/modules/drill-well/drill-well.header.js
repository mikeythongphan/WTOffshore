import { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TablePagination from '@mui/material/TablePagination';
import { motion } from 'framer-motion';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { DrillWellAdd } from './drill-well.add';
import { drillWellModel } from 'src/app/@domain/models/drill-well.model';
import { isUNE } from 'src/app/@core/common';
import { ModuleContext } from 'src/app/@domain/contexts/module.context';

/**
 * 
 * @param {*} props 
 * @returns 
 */
const DrillWellHeader = props => {

  const { gvItems } = props;
  const { comments, frmModel, page, rowsPerPage, searchText } = useContext(ModuleContext);

  const { reset } = frmModel();
  const [open, setOpen] = useState(false);

  /**
   * 
   * @param {*} event 
   * @param {*} value 
   */
  const onChangePage = (event, value) => {
    page(value);
  }

  /**
   * 
   * @param {*} event 
   */
  const onChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
  }

  /**
   * 
   */
  const onAdd = () => {
    comments([]);
    reset(drillWellModel.createNew());
    setOpen(true);
  };

  return (
    <div className="flex flex-col sm:flex-row space-y-16 sm:space-y-0 flex-1 w-full items-center justify-between py-32 px-24 md:px-32">
      <Typography
        component={motion.span}
        initial={{ x: -20 }}
        animate={{ x: 0, transition: { delay: 0.2 } }}
        delay={300}
        className="text-24 md:text-32 font-extrabold tracking-tight">
        Drill Wells
      </Typography>

      <div className="flex flex-col w-full sm:w-auto sm:flex-row space-y-16 sm:space-y-0 flex-1 items-center justify-center space-x-8">
        <Paper
          component={motion.div}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
          className="flex items-center w-full sm:max-w-256 space-x-8 px-16 rounded-full border-1 shadow-0">
          <FuseSvgIcon color="disabled">heroicons-solid:search</FuseSvgIcon>
          <Input
            placeholder="Search"
            className="flex flex-1"
            disableUnderline
            fullWidth
            value={searchText()}
            inputProps={{
              'aria-label': 'Search',
            }}
            onChange={e => searchText(e.target.value)}
          />
        </Paper>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
        >
          <Button variant="contained" color="secondary"
            onClick={onAdd}
            startIcon={<FuseSvgIcon>heroicons-outline:plus</FuseSvgIcon>}>
            Add
          </Button>
        </motion.div>
      </div>
      <TablePagination
        className="shrink-0"
        component="div"
        count={isUNE(gvItems) ? 0 : gvItems.length}
        rowsPerPage={rowsPerPage()}
        page={page()}
        backIconButtonProps={{ 'aria-label': 'Previous Page' }}
        nextIconButtonProps={{ 'aria-label': 'Next Page' }}
        onPageChange={onChangePage}
        onRowsPerPageChange={onChangeRowsPerPage}
      />
      <DrillWellAdd open={open} setOpen={setOpen} />
    </div>
  );
}

export default DrillWellHeader;
