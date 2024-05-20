import React from 'react'
import { Typography, Stack, Grid, Box } from '@mui/material'
import { Gauge } from '@mui/x-charts/Gauge'

import { VoteContext } from '../store/vote-context.jsx'
import PresidentialList from './PresidentialList.jsx'
import VoteListItem from './VoteListItem.jsx'
import RateBar from './RateBar.jsx'
import theme from '../theme.js'

export default function PresidentialVotes() {
  const { selectedTotalVote } = React.useContext(VoteContext)

  return (
    <Box sx={{ borderRadius: 3, bgcolor: theme.palette.customBg.main, p: 2 }}>
      <Typography
        variant="h6"
        component="h4"
        color="text.primary"
        fontWeight="bold"
        pt={1}
        pb={2}
      >
        總統得票數
      </Typography>

      <Grid container rowSpacing={2} columnSpacing={{ md: 2 }}>
        <Grid item xs={12} xl={6}>
          <Box
            sx={{
              px: { xs: 2, md: 3 },
              py: { xs: 2, md: 4 },
              borderRadius: 3,
              bgcolor: theme.palette.background.paper
            }}
          >
            <PresidentialList />

            <RateBar
              data={selectedTotalVote}
              isShowText
              height={18}
            />
          </Box>
        </Grid>

        <Grid item xs={12} xl={6}>
          <Stack
            direction='row'         
            spacing={{ md: 5 }}
            justifyContent={{ xs: 'space-around', md: 'flex-start'}}
            borderRadius={3}
            bgcolor={theme.palette.background.paper}
            py={{ xs: 2, md: 3 }}
            px={{ md: 3 }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Gauge
                width={124}
                height={124}
                value={selectedTotalVote.rate}
                text={
                  ({ value }) => `投票率\n ${value}%`
                }
              />
            </Box>

            <Stack spacing={2}>
              <Stack
                spacing={{ xs: 2, md: 6 }}
                direction={{ xs: 'column', md: 'row' }}
              >
                <VoteListItem text='投票數' value={selectedTotalVote.total.toLocaleString()} />
                <VoteListItem text='投票率' value={`${selectedTotalVote.rate}%`} />
              </Stack>

              <Stack
                spacing={{ xs: 2, md: 6 }}
                direction={{ xs: 'column', md: 'row' }}
              >
                <VoteListItem text='有效票數' value={selectedTotalVote.valid.toLocaleString()} />
                <VoteListItem text='無效票數' value={selectedTotalVote.invalid.toLocaleString()} />
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}
