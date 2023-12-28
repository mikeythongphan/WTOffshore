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
  id: 'wellProject',
  align: 'left',
  disablePadding: false,
  label: 'Well Project',
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
  id: 'responsibleParty',
  align: 'left',
  disablePadding: false,
  label: 'Responsible Party',
  sort: true,
 },
 {
  id: 'reservoirEngineer',
  align: 'left',
  disablePadding: false,
  label: 'Reservoir Engineer',
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
  id: 'budgeted',
  align: 'left',
  disablePadding: false,
  label: 'Budgeted',
  sort: true,
 },
 {
  id: 'expectedVolume_NetBOE',
  align: 'left',
  disablePadding: false,
  label: 'ExpectedVolume NetBOE',
  sort: true,
 },
 {
  id: 'expectedRate_NetBOED',
  align: 'left',
  disablePadding: false,
  label: 'ExpectedRate NetBOED',
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
  id: 'operator',
  align: 'left',
  disablePadding: false,
  label: 'Operator',
  sort: true,
 },
 {
  id: 'wellStatus',
  align: 'left',
  disablePadding: false,
  label: 'Well Status',
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
  id: 'peerReview',
  align: 'left',
  disablePadding: false,
  label: 'Peer Review',
  sort: true,
 },
 {
  id: 'afeReview',
  align: 'left',
  disablePadding: false,
  label: 'afeReview',
  sort: true,
 },
 {
  id: 'permitApproval',
  align: 'left',
  disablePadding: false,
  label: 'Permit Approval',
  sort: true,
 },
 {
  id: 'afe',
  align: 'left',
  disablePadding: false,
  label: 'Afe',
  sort: true,
 },
 {
  id: 'executeFirstSpend',
  align: 'left',
  disablePadding: false,
  label: 'Execute First Spend',
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
  id: 'responsiblePartyRole',
  align: 'left',
  disablePadding: false,
  label: 'Responsible Party Role',
  sort: true,
 },
 {
  id: 'productionEngineeringPeerReview',
  align: 'left',
  disablePadding: false,
  label: 'Production Engineering Peer Review',
  sort: true,
 },
 {
  id: 'reservoirEngineeringPeerReview',
  align: 'left',
  disablePadding: false,
  label: 'Reservoir Engineering Peer Review',
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
  id: 'comments',
  align: 'left',
  disablePadding: false,
  label: 'Comments',
  sort: true,
 },
 {
  id: 'testDate',
  align: 'left',
  disablePadding: false,
  label: 'Test Date',
  sort: true,
 },
 {
  id: 'commercialReadiness',
  align: 'left',
  disablePadding: false,
  label: 'Commercial Readiness',
  sort: true,
 },
 {
  id: 'lastOil_Bbl',
  align: 'left',
  disablePadding: false,
  label: 'LastOil Bbl',
  sort: true,
 },
 {
  id: 'lastGas_Mcf',
  align: 'left',
  disablePadding: false,
  label: 'lastGas Mcf',
  sort: true,
 },
 {
  id: 'lastWater_Bb',
  align: 'left',
  disablePadding: false,
  label: 'LastWater Bb',
  sort: true,
 },
 {
  id: 'rio_ID',
  align: 'left',
  disablePadding: false,
  label: 'Rio ID',
  sort: true,
 },
 {
  id: 'nsaI_PNP',
  align: 'left',
  disablePadding: false,
  label: 'NSAI PNP',
  sort: true,
 },
 {
  id: 'nsaI_PRB',
  align: 'left',
  disablePadding: false,
  label: 'NSAI PRB',
  sort: true,
 },
 {
  id: 'nsaI_POS',
  align: 'left',
  disablePadding: false,
  label: 'NSAI POS',
  sort: true,
 },
];

function ProjectListTableHead(props) {

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
       style={{ backgroundColor: '#e1e1e1' }}
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

export default ProjectListTableHead;
