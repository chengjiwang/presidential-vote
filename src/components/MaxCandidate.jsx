import React from 'react'
import PropTypes from 'prop-types'
import { Box, Stack } from '@mui/material'

import { VoteContext } from '../store/vote-context.jsx'
import { partyColor } from '../utils/partyColor.js'

export default function MaxCandidate({ maxVotedParty }) {
  const { candidate } = React.useContext(VoteContext)
  
  return (
    <Stack direction='row' alignItems='center' spacing={1}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 32,
          height: 32,
          fontSize: 16,
          fontWeight: 700,
          borderRadius: 32,
          color: 'white',
          bgcolor: partyColor[maxVotedParty]
        }}
      >
        {candidate[maxVotedParty].number}
      </Box>

      <Box>
        {candidate[maxVotedParty].name}
      </Box>
    </Stack>
  )
}

MaxCandidate.propTypes = {
  maxVotedParty: PropTypes.string
}
