import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import { Typography, Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { tableCellClasses } from '@mui/material/TableCell'

import RateBar from './RateBar.jsx'
import MaxCandidate from './MaxCandidate.jsx';
import getMaxVotedParty from '../utils/getMaxVotedParty.js'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.bg.main,
    fontSize: 14,
  }
}))

export default function VoteTable({ candidate, voteData }) {

  return (
    <Box>
      <Typography
        component='h5'
        variant='h6'
        fontWeight={700}
        mb={1}
      >
        各縣市投票總覽
      </Typography>

      <Table aria-label="vote table">
        <TableHead>
          <TableRow>
            <StyledTableCell>地區</StyledTableCell>
            <StyledTableCell>得票率</StyledTableCell>
            <StyledTableCell>當選人</StyledTableCell>
            <StyledTableCell>投票數</StyledTableCell>
            <StyledTableCell>投票率</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(voteData).map((key) => {
            const voteItem = voteData[key]
            const maxVotedParty = getMaxVotedParty(voteItem)
            return (
              <TableRow
                key={key}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}          
              >
                <TableCell component="th" scope="row">
                  {key}
                </TableCell>
                <TableCell>
                  <RateBar
                    candidate={candidate}
                    data={voteItem}
                    height={8}
                  />
                </TableCell>
                <TableCell>
                  <MaxCandidate
                    candidate={candidate}
                    maxVotedParty={maxVotedParty}
                  />
                </TableCell>
                <TableCell>{voteItem.total.toLocaleString()}</TableCell>
                <TableCell>{voteItem.rate}%</TableCell>               
              </TableRow>
            )
          })}        
        </TableBody>
      </Table>
    </Box>
  )
}

VoteTable.propTypes = {
  candidate: PropTypes.object,
  voteData: PropTypes.object
}