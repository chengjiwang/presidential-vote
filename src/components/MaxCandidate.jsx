import PropTypes from 'prop-types'
import { Box, Stack } from '@mui/material'

import { partyColor } from '../utils/partyColor.js'

export default function MaxCandidate({ candidate, maxVotedParty }) {
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
  candidate: PropTypes.object,
  maxVotedParty: PropTypes.string
}