import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import { Typography, Box, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Stack } from '@mui/material'
import { tableCellClasses } from '@mui/material/TableCell'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

import { VoteContext } from '../pages/Vote.jsx'
import RateBar from './RateBar.jsx'
import MaxCandidate from './MaxCandidate.jsx';
import getMaxVotedParty from '../utils/getMaxVotedParty.js'
import theme from '../theme.js'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.bg.main,
    fontSize: 14,
  }
}))

export default function VoteTable({ candidate, voteData }) {
  const { selectedCity, setSelectedCity, selectedDistrict, setSelectedDistrict } = React.useContext(VoteContext)

  const isShowArrowRightIcon = selectedCity === 'all' || selectedDistrict === 'all'

  const handleTableRowClick = (clickedRow) => {
    if (selectedCity === 'all') {
      setSelectedCity(clickedRow)
    } else if (selectedCity !== 'all' && selectedDistrict === 'all') {
      setSelectedDistrict(clickedRow)
    }
  }

  return (
    <Box>
      <Typography
        component='h5'
        variant='h6'
        fontWeight={700}
        mb={1}
      >
        {selectedCity === 'all' ? '各縣市投票總覽' : '各區域投票總覽'}
      </Typography>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader size="small" aria-label="vote table">
          <TableHead>
            <TableRow>
              <StyledTableCell>地區</StyledTableCell>
              <StyledTableCell>得票率</StyledTableCell>
              <StyledTableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>當選人</StyledTableCell>
              <StyledTableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>投票數</StyledTableCell>
              <StyledTableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>投票率</StyledTableCell>
              {isShowArrowRightIcon && <StyledTableCell />}
            </TableRow>
          </TableHead>

          <TableBody>
            {Object.keys(voteData).map((key) => {
              const voteItem = voteData[key]
              const maxVotedParty = getMaxVotedParty(voteItem)
              return (
                <TableRow
                  key={key}
                  onClick={() => handleTableRowClick(key)}
                  sx={{
                    cursor: isShowArrowRightIcon ? 'pointer' : 'auto',
                    '&:last-child td, &:last-child th': { border: 0 },
                    '&:hover': { backgroundColor: theme.palette.bg.main }
                  }}
                >
                  <TableCell component="th" scope="row" sx={{ fontWeight: 700 }}>
                    {key}
                  </TableCell>
                  <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>
                    <RateBar
                      candidate={candidate}
                      data={voteItem}
                      height={8}
                    />
                  </TableCell>
                  <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>
                    <MaxCandidate
                      candidate={candidate}
                      maxVotedParty={maxVotedParty}
                    />
                  </TableCell>
                  <TableCell sx={{ display: { md: 'none' } }}>
                    <Stack spacing={1}>
                      <MaxCandidate
                        candidate={candidate}
                        maxVotedParty={maxVotedParty}
                      />
                      <RateBar
                        candidate={candidate}
                        data={voteItem}
                        height={8}
                      />
                    </Stack>
                  </TableCell>
                  <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>{voteItem.total.toLocaleString()}</TableCell>
                  <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>{voteItem.rate}%</TableCell>
                  {isShowArrowRightIcon && (
                    <TableCell>
                      <KeyboardArrowRightIcon />
                    </TableCell>
                  )}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

VoteTable.propTypes = {
  candidate: PropTypes.object,
  voteData: PropTypes.object
}