import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { BarChart } from '@mui/x-charts/BarChart'
import { LineChart } from '@mui/x-charts/LineChart'
import { legendClasses } from '@mui/x-charts'

import { getPartyVote, getSeriesData, lineValueFormatter } from '../utils/chartHelper.js'

const chartSetting = {
  height: 320,
  grid:{ horizontal: true },
  slotProps:{
    legend: {
      direction: 'row',
      position: { vertical: 'top', horizontal: 'right' },
      itemMarkWidth: 8,
      itemMarkHeight: 8,
      labelStyle: {
        fontSize: 12,
      },
      padding: { top: 0 }
    }
  },
  sx: {
    py: 2,
    px: 1,
    [`.${legendClasses.mark}`]: {
      ry: 10,
    },
  }
}

export default function PartyChart() {
  const partyVote = React.useMemo(
    () => getPartyVote(),
    []
  )
  const seriesData = React.useMemo(
    () => getSeriesData(partyVote),
    [partyVote]
  )

  return (
    <Stack spacing={2} direction={{ xs: 'column', xxl: 'row' }} width='100%'>
      <Box
        sx={{
          width: { xs: '100%', xxl: '50%' },
          border: '1px solid #DEE2E6',
          borderRadius: 4,
          position: 'relative'
        }}>
        <Typography
          variant="h6"
          component="h5"
          color="text.primary"
          fontWeight="bold"
          position={{ xs: 'relative', md: 'absolute' }}
          top={16}
          left={16}
        >
          歷屆政黨得票數
        </Typography>

        <BarChart
          dataset={partyVote.numbers}
          xAxis={[{ scaleType: 'band', tickPlacement: 'extremities', dataKey: 'year' }]}
          yAxis={
            [{ valueFormatter: (value) => `${(value / 10000).toFixed(0)}萬` }]
          }
          series={seriesData.bar}
          {...chartSetting}
        />
      </Box>

      <Box
        sx={{
          width: { xs: '100%', xxl: '50%' },
          border: '1px solid #DEE2E6',
          borderRadius: 4,
          position: 'relative'
        }}>
        <Typography
          variant="h6"
          component="h5"
          color="text.primary"
          fontWeight="bold"
          position={{ xs: 'relative', md: 'absolute' }}
          top={16}
          left={16}
        >
          歷屆政黨得票率
        </Typography>

        <LineChart
          dataset={partyVote.rates}  
          xAxis={[{ scaleType: 'point', dataKey: 'year' }]}
          yAxis={         
            [{ valueFormatter: lineValueFormatter }]
          }
          series={seriesData.line}
          {...chartSetting}
        />
      </Box>
    </Stack>
  );
}