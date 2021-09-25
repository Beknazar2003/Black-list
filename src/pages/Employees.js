import Table from '../components/Table'
import { Container} from '@mui/material'
import Finder from '../components/Finder'

export default function Employees() {
  return (
            <Container>
              <Finder text={'Список сотрудников'}/>
              <Table />
            </Container>
  )
}