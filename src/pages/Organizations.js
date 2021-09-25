import Table from '../components/Table'
import { Container} from '@mui/material'
import Finder from '../components/Finder'

export default function Organizations() {
  return (
    <Container>
      <Finder text={'Список организаций'} />
      <Table />
    </Container>
  )
}