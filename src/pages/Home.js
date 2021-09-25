import { Container} from '@mui/material'
import Finder from '../components/Finder'
import MyChart from '../components/Chart'

export default function Home() {
  return (
            <Container>
              <Finder text={'Главная'}/>
              <MyChart/>
            </Container>
  )
}