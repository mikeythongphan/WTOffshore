import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Tooltip from '@mui/material/Tooltip';
import TableHead from '@mui/material/TableHead';

const rows = [
  {
    id: 'action',
    align: 'center',
    disablePadding: false,
    sort: false,
  },
  {
    id: 'id',
    align: 'left',
    disablePadding: false,
    label: 'ID',
    sort: true,
  },
  {
    id: 'projectCd',
    align: 'left',
    disablePadding: false,
    label: 'ProjectCd',
    sort: true,
  },
  {
    id: 'projectStatus',
    align: 'left',
    disablePadding: false,
    label: 'Project Status',
    sort: true,
  },
  {
    id: 'area',
    align: 'left',
    disablePadding: false,
    label: 'Area',
    sort: true,
  },
  {
    id: 'fieldProspect',
    align: 'left',
    disablePadding: false,
    label: 'Field Prospect',
    sort: true,
  },
  {
    id: 'reservoir',
    align: 'left',
    disablePadding: false,
    label: 'Reservoir',
    sort: true,
  },
  {
    id: 'wellProject',
    align: 'left',
    disablePadding: false,
    label: 'Well Project',
    sort: true,
  },
  {
    id: 'responsibleParty',
    align: 'left',
    disablePadding: false,
    label: 'Responsible Party',
    sort: true,
  },
  {
    id: 'geologist',
    align: 'left',
    disablePadding: false,
    label: 'Geologist',
    sort: true,
  },
  {
    id: 'waterDepth',
    align: 'left',
    disablePadding: false,
    label: 'Water Depth',
    sort: true,
  },
  {
    id: 'budgetYear',
    align: 'left',
    disablePadding: false,
    label: 'Budget Year',
    sort: true,
  },
  {
    id: 'budgetCategory',
    align: 'left',
    disablePadding: false,
    label: 'Budget Category',
    sort: true,
  },
  {
    id: 'projectClassification',
    align: 'left',
    disablePadding: false,
    label: 'Project Classification',
    sort: true,
  },
  {
    id: 'projectMaturity',
    align: 'left',
    disablePadding: false,
    label: 'Project Maturity',
    sort: true,
  },
  {
    id: 'wi',
    align: 'left',
    disablePadding: false,
    label: 'WI',
    sort: true,
  },
  {
    id: 'leaseExpiration',
    align: 'left',
    disablePadding: false,
    label: 'Lease Expiration',
    sort: true,
  },
  {
    id: 'screeningEconomics',
    align: 'left',
    disablePadding: false,
    label: 'Screening Economics',
    sort: true,
  },
  {
    id: 'technicalEvaluation',
    align: 'left',
    disablePadding: false,
    label: 'Technical Evaluation',
    sort: true,
  },
  {
    id: 'peerReview',
    align: 'left',
    disablePadding: false,
    label: 'Peer Review',
    sort: true,
  },
  {
    id: 'afeQualityCost',
    align: 'left',
    disablePadding: false,
    label: 'Afe Quality Cost',
    sort: true,
  },
  {
    id: 'technicalReview',
    align: 'left',
    disablePadding: false,
    label: 'Technical Review',
    sort: true,
  },
  {
    id: 'executiveManagementReview',
    align: 'left',
    disablePadding: false,
    label: 'Executive Management Review',
    sort: true,
  },
  {
    id: 'regulatorySubmit',
    align: 'left',
    disablePadding: false,
    label: 'Regulatory Submit',
    sort: true,
  },
  {
    id: 'regulatoryApproval',
    align: 'left',
    disablePadding: false,
    label: 'Regulatory Approval',
    sort: true,
  },
  {
    id: 'afeApprovalTarget',
    align: 'left',
    disablePadding: false,
    label: 'Afe Approval Target',
    sort: true,
  },
  {
    id: 'afe',
    align: 'left',
    disablePadding: false,
    label: 'AFE',
    sort: true,
  },
  {
    id: 'anticipatedIP',
    align: 'left',
    disablePadding: false,
    label: 'Anticipated IP',
    sort: true,
  },
  {
    id: 'comments',
    align: 'left',
    disablePadding: false,
    label: 'Comments',
    sort: true,
  },
  {
    id: 'executeFirstSpend',
    align: 'left',
    disablePadding: false,
    label: 'Execute First Spend',
    sort: true,
  },
];

function DrillWellTableHead(props) {

  /**
   * 
   * @param {*} property 
   * @returns 
   */
  const createSortHandler = (property) => (event) => {
    props.onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow className="h-48 sm:h-64">
        {rows.map((row) => {
          return (
            <TableCell
              width="100" 
              style={{backgroundColor: '#e1e1e1'}}
              className="p-4 md:p-5"
              key={row.id}
              align="center"
              padding={row.disablePadding ? 'none' : 'normal'}
              sortDirection={props.order.id === row.id ? props.order.direction : false}>
              {row.sort && (
                <Tooltip
                  title="Sort"
                  placement={row.align === 'right' ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}>
                  <TableSortLabel
                    active={props.order.id === row.id}
                    direction={props.order.direction}
                    onClick={createSortHandler(row.id)}
                    className="font-semibold">
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              )}
            </TableCell>
          );
        }, this)}
      </TableRow>
    </TableHead>
  );
}

export default DrillWellTableHead;
