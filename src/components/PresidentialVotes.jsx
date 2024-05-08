import PropTypes from 'prop-types'
import { Typography, Stack, Grid, Box } from '@mui/material'
import { Gauge } from '@mui/x-charts/Gauge'

import PresidentialList from './PresidentialList.jsx'
import VoteListItem from './VoteListItem.jsx'
import RateBar from './RateBar.jsx'
import theme from '../theme.js'

export default function PresidentialVotes({ candidate, voteData }) {
  return (
    <Box sx={{ borderRadius: 3, bgcolor: theme.palette.bg.main, p: 2 }}>
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

      <Grid container spacing={2}>
        <Grid item xs={12} xl={6} >
          <Box
            sx={{
              px: 3,
              py: 4,
              borderRadius: 3,
              bgcolor: theme.palette.background.paper
            }}
          >
            <PresidentialList candidate={candidate} voteData={voteData} />

            <RateBar
              candidate={candidate}
              data={voteData}
              isShowText
              height={18}
            />
          </Box>
        </Grid>

        <Grid item xs={12} xl={6}>
          <Stack direction='row' spacing={5} borderRadius={3} bgcolor={theme.palette.background.paper} p={3}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Gauge
                width={124}
                height={124}
                value={voteData.rate}
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
                <VoteListItem text='投票數' value={voteData.total.toLocaleString()} />
                <VoteListItem text='投票率' value={`${voteData.rate}%`} />
              </Stack>

              <Stack
                spacing={{ xs: 2, md: 6 }}
                direction={{ xs: 'column', md: 'row' }}
              >
                <VoteListItem text='有效票數' value={voteData.valid.toLocaleString()} />
                <VoteListItem text='無效票數' value={voteData.invalid.toLocaleString()} />
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

PresidentialVotes.propTypes = {
  candidate: PropTypes.object,
  voteData: PropTypes.object
};