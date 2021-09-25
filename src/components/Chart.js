import React from 'react'
import { Chart } from 'react-google-charts'
import { Box , Paper} from '@mui/material'

export default function MyChart() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Paper variant='elevation' sx={{flexGrow: 1}}>
        <Chart
          width={'669px'}
          height={'600px'}
          chartType="AreaChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Year', 'Sales', 'Expenses'],
            ['2013', 1000, 400],
            ['2014', 1170, 460],
            ['2015', 660, 1120],
            ['2016', 1030, 540],
          ]}
          options={{
            font: '#fff',
            colors: ['#9a73c4', '#b1ae59', '#2E7A6D', '#b66855'].reverse(),
            legendTextStyle: { color: '#FFF' },
            titleTextStyle: { color: '#FFF' },
            hAxis: {
              textStyle: { color: '#FFF' },
            },
            vAxis: {
              textStyle: { color: '#FFF' },
            },
            backgroundColor: '#344b63',
            isStacked: true,
            height: 300,
            legend: { position: 'bottom', maxLines: 3 },
          }}
          rootProps={{ 'data-testid': '2' }}
        />
      </Paper>
      <Paper>
        <Chart
          width={'293px'}
          height={'600px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Year', 'Sales', 'Expenses'],
            ['2013', 1000, 400],
            ['2014', 1170, 460],
            ['2015', 660, 1120],
            ['2016', 1030, 540],
          ]}
          options={{
            font: '#fff',
            colors: ['#9a73c4', '#b1ae59', '#2E7A6D', '#b66855'].reverse(),
            legendTextStyle: { color: '#FFF' },
            titleTextStyle: { color: '#FFF' },
            hAxis: {
              textStyle: { color: '#FFF' },
            },
            vAxis: {
              textStyle: { color: '#FFF' },
            },
            backgroundColor: '#344b63',
            isStacked: true,
            height: 300,
            legend: 'none',
          }}
          rootProps={{ 'data-testid': '2' }}
        />
      </Paper>
    </Box>
  )
}
