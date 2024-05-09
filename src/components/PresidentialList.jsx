import React from 'react'
import { Typography, Box, List, ListItem, ListItemText, ListItemAvatar } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

import { VoteContext } from '../pages/Vote.jsx'
import { partyColor } from '../utils/partyColor.js'
import getMaxVotedParty from '../utils/getMaxVotedParty.js'
import theme from '../theme.js'

export default function PresidentialList() {
  const { selectedTotalVote, candidate } = React.useContext(VoteContext)

  const maxVotedParty = React.useMemo(
    () => getMaxVotedParty(selectedTotalVote),
    [selectedTotalVote]
  )

  return (
    <List
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        minWidth: 170
      }}
      disablePadding
    >
      {Object.keys(candidate).map((key, index) => {
        return (
          <ListItem
            key={index}
            disablePadding
            alignItems="flex-start"
            sx={{ width: { xs: '100%', md: `${(1 / 3) * 100}%` } }}
          >
            <ListItemAvatar sx={{ mr: 0.5 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 48,
                  height: 48,
                  fontSize: 28,
                  fontWeight: 700,
                  borderRadius: 4,
                  color: 'white',
                  bgcolor: partyColor[key]
                }}
              >
                {candidate[key].number}
              </Box>
            </ListItemAvatar>

            <ListItemText
              primary={key}
              sx={{ mb: 1.5 }}
              primaryTypographyProps={{ fontSize: 12, color: 'text.secondary' }}
              secondary={
                <>
                  <Box component='span' sx={{ display: 'flex', py: 0.5 }}>
                    <Typography
                      sx={{ fontSize: 16 }}
                      component='span'
                      variant="body2"
                      color="text.primary"
                    >
                      {candidate[key].name}
                    </Typography>

                    {key === maxVotedParty && <CheckCircleIcon color='primary' />}
                  </Box>

                  <Box component='span'>
                    <Box
                      component='span'
                      sx={{ fontSize: 16, fontWeight: 700, color: theme.palette.text.primary }}
                    >
                      {selectedTotalVote[key].total.toLocaleString()}
                    </Box>
                    <Box component='span' sx={{ ml: 0.5 }}>票</Box>
                  </Box>
                </>
              }
            />
          </ListItem>
        )
      })}
    </List>
  )
}
