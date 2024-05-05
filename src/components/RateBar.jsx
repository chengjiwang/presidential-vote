import PropTypes from 'prop-types'
import { Typography, Stack, Box } from '@mui/material'

import { partyColor } from '../utils/partyColor.js'

export default function RateBar({ candidate, data, isShowText= false, height }) {
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
  candidate: PropTypes.object,
  data: PropTypes.object,
  isShowText: PropTypes.bool,
  height: PropTypes.number.isRequired
}