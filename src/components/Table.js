import * as React from 'react'
import { DataGrid, useGridSlotComponentProps  } from '@mui/x-data-grid'
import { makeStyles } from '@material-ui/styles'
import CheckIcon from '@mui/icons-material/CheckCircleOutline'
import UnCheckIcon from '@mui/icons-material/RadioButtonUnchecked'
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import PenIcon from '@mui/icons-material/CreateOutlined'
import DeleteIcon from '@mui/icons-material/ClearOutlined'
import DocIcon from '@mui/icons-material/InsertDriveFileOutlined'
import SaveIcon from '@mui/icons-material/SaveOutlined';
import Rating from '@mui/material/Rating'
import { IconButton, Button } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import { Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    '& .grey': {
      backgroundColor: '#F2F2F2',
      color: '#A580C1',
    },
    '& .default': {
      color: '#A580C1',
    },
    '& .header' : {
      fontWeight: 'bold'
    }
  }
}))
function renderRating(params) {
  return <Rating readOnly value={params.value} />
}
function renderCheck(params) {
  return params.value ? (
    <CheckIcon sx={{ m: 'auto' }} color="success" />
  ) : (
    <UnCheckIcon sx={{ m: 'auto' }} color="inherit" />
  )
}

function RenderButtonGroup(params) {
  return (
    <>
      <IconButton color="success">
        <EyeIcon />
      </IconButton>
      <IconButton>
        <PenIcon />
      </IconButton>
      <IconButton color="error">
        <DeleteIcon />
      </IconButton>
    </>
  )
}

function CustomPagination() {
  const { state, apiRef } = useGridSlotComponentProps();
  const classes = useStyles();

  return (
    <Pagination
      className={classes.root}
      sx={{borderRadius: 0}}
      color="primary"
      count={state.pagination.pageCount}
      page={state.pagination.page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}
function CustomToolbar() {
  return (
    <Box sx={{display: 'flex', p: 1}}>
    <Box sx={{flexGrow: 1 }}>
      <Button sx={{textTransform: 'none'}} variant="contained" color="error" startIcon={<DeleteIcon/>}>Удалить выбраные</Button>
      <Button sx={{mr: 1, ml: 1, textTransform: 'none'}} variant="contained" startIcon={<DocIcon/>}>Импорт</Button>
      <Button sx={{textTransform: 'none'}} variant="contained" startIcon={<SaveIcon/>}>Экспрот</Button>
     </Box>
      <CustomPagination/>
    </Box>
  );
}
const columns = [
  { field: 'id', headerName: 'ID', headerClassName: 'header', sortable: false, width: 20 },
  {
    field: 'fullname',
    headerName: 'Ф.И.О.',
    headerClassName: 'header', 
    width: 200,
    sortable: false,
    editable: true,
  },
  { field: 'org', headerName: 'Организация', headerClassName: 'header', width: 120, sortable: false },
  {
    field: 'amountOwed',
    headerName: 'Сумма задолжности',
    headerClassName: 'header', 
    width: 180,
    sortable: false,
  },
  {
    field: 'rating',
    headerName: 'Рейтинг',
    headerClassName: 'header', 
    renderCell: renderRating,
    editable: true,
    width: 130,
    type: 'number',
    sortable: false,
  },
  {
    field: 'status',
    headerName: 'Статус',
    headerClassName: 'header', 
    sortable: false,
    renderCell: renderCheck,
    width: 80,
  },
  { field: 'date', headerName: 'Дата', headerClassName: 'header', sortable: false },
  {
    field: '',
    headerName: '',
    headerClassName: 'header', 
    sortable: false,
    renderCell: RenderButtonGroup,
    width: 130,
  },
]

const rows = [
  {
    id: 1,
    fullname: 'Бекташов Бекназар Рысбекович',
    org: 'Google',
    amountOwed: 35,
    rating: 5,
    status: true,
    date: '22.06.2020',
  },
  {
    id: 2,
    fullname: 'Бекташов Бекназар Рысбекович',
    org: 'Google',
    amountOwed: 35,
    rating: 5,
    status: true,
    date: '22.06.2020',
  },
  {
    id: 3,
    fullname: 'Бекташов Бекназар Рысбекович',
    org: 'Google',
    amountOwed: 35,
    rating: 5,
    status: true,
    date: '22.06.2020',
  },
  {
    id: 4,
    fullname: 'Бекташов Бекназар Рысбекович',
    org: 'Google',
    amountOwed: 35,
    rating: 5,
    status: true,
    date: '22.06.2020',
  },
  {
    id: 5,
    fullname: 'Бекташов Бекназар Рысбекович',
    org: 'Google',
    amountOwed: 35,
    rating: 5,
    status: true,
    date: '22.06.2020',
  },
  {
    id: 6,
    fullname: 'Бекташов Бекназар Рысбекович',
    org: 'Google',
    amountOwed: 35,
    rating: 5,
    status: true,
    date: '22.06.2020',
  },
  {
    id: 7,
    fullname: 'Бекташов Бекназар Рысбекович',
    org: 'Google',
    amountOwed: 35,
    rating: 5,
    status: true,
    date: '22.06.2020',
  },
  {
    id: 8,
    fullname: 'Бекташов Бекназар Рысбекович',
    org: 'Google',
    amountOwed: 35,
    rating: 5,
    status: true,
    date: '22.06.2020',
  },
  {
    id: 9,
    fullname: 'Бекташов Бекназар Рысбекович',
    org: 'Google',
    amountOwed: 35,
    rating: 5,
    status: false,
    date: '22.06.2020',
  },
  {
    id: 10,
    fullname: 'Бекташов Бекназар Рысбекович',
    org: 'Google',
    amountOwed: 35,
    rating: 5,
    status: true,
    date: '22.06.2020',
  },
]

export default function Table() {
  const classes = useStyles()
  return (
    <div className={classes.root} style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        getCellClassName={(params) =>
          params.id % 2 === 0 ? 'grey' : 'default'
        }
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        components={{
          Footer: CustomToolbar,
        }}
        checkboxSelection
        disableColumnMenu
        autoPageSize
      />
    </div>
  )
}
