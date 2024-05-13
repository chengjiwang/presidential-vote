import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Stack, Box } from '@mui/material'

import { VoteContext } from '../store/vote-context.jsx'
import { partyColor } from '../utils/partyColor.js'

export default function RateBar({ data, isShowText = false, height }) {
  const { candidate } = React.useContext(VoteContext)

  return (
    <Stack direction='row' borderRadius={4} overflow='hidden'>
      {Object.keys(candidate).map((key, index) => {
        const rate = data[key].rate
        return (
          <Box
            key={index}
            sx={{
              bgcolor: partyColor[key],
              width: `${rate}%`,
              height: height
            }}>
            {rate > 5 && isShowText && (
              <Typography fontSize={12} align='center' color='common.white'>
                {rate}%
              </Typography>
            )}
          </Box>
        )
      })}
    </Stack>
  )
}

RateBar.propTypes = {
  data: PropTypes.object,
  isShowText: PropTypes.bool,
  height: PropTypes.number.isRequired
}