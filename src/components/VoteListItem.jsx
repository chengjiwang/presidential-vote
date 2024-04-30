import PropTypes from 'prop-types'
import { Typography, Stack } from '@mui/material'

export default function VoteListItem({ text, value }) {
  return (
    <Stack spacing={1} minWidth={138}>
      <Typography
        variant="body2"
        color="text.secondary"
      >
        {text}
      </Typography>

      <Typography
        variant="h6"
        color="text.primary"
        fontSize={16}
        fontWeight="bold"
      >
        {value}
      </Typography>
    </Stack>
  )
}

VoteListItem.propTypes = {
  text: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};