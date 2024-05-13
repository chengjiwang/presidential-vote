import { Typography, Stack } from '@mui/material'

import VoteContextProvider from '../store/vote-context.jsx'
import VoteHeader from '../components/VoteHeader.jsx'
import PresidentialVotes from '../components/PresidentialVotes.jsx'
import PartyChart from '../components/PartyChart.jsx'
import VoteTable from '../components/VoteTable.jsx'

function VotePage() {
  return (
    <VoteContextProvider>
      <VoteHeader />

      <Stack
        spacing={3}
        component='section'
        sx={{ mt: 4, mx: 3, pt: '96px' }}
      >
        <Typography
          component="h3"
          color="text.primary"
          fontWeight="bold"
          fontSize={28}
        >
          全臺縣市總統得票
        </Typography>
        
        <PresidentialVotes />
        <PartyChart />
        <VoteTable />
      </Stack>
    </VoteContextProvider>
  )
}

export default VotePage
