import React from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Stack } from '@mui/material'

import VoteHeader from '../components/VoteHeader.jsx'
import PresidentialVotes from '../components/PresidentialVotes.jsx'
import PartyChart from '../components/PartyChart.jsx'
import VoteTable from '../components/VoteTable.jsx'
import candidates from '../data/candidates.json'
import elections from '../data/election.json'

export const VoteContext = React.createContext()
export const HeaderContext = React.createContext()
export const UserSelectionContext = React.createContext()

function VotePage() {
  const params = useParams()

  const [query, setQuery] = React.useState({
    year: params?.voteId,
    city: 'all',
    district: 'all'
  })
  
  const election = elections[query.year]
  const districtData = election['縣市'][query.city]

  let selectedTotalVote = {}
  let selectedEachVote = {}
  if (query.city === 'all') {
    selectedTotalVote = election['全國']
    selectedEachVote = election['縣市']
  } else if (query.city !== 'all' && query.district === 'all') {
    selectedTotalVote = districtData
    selectedEachVote = districtData['鄉鎮市區']
  } else {
    selectedTotalVote = districtData['鄉鎮市區'][query.district]
    selectedEachVote = districtData['鄉鎮市區'][query.district]['村里']
  }

  return (
    <>
      <HeaderContext.Provider
        value={{
          query,
          setQuery       
        }}
      >
        <VoteHeader />
      </HeaderContext.Provider>

      <VoteContext.Provider
        value={{
          selectedTotalVote,
          selectedEachVote,
          candidate: candidates[query.year]
        }}
      >
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

          <UserSelectionContext.Provider
            value={{
              query,
              setQuery            
            }}
          >
            <VoteTable />
          </UserSelectionContext.Provider>
        </Stack>
      </VoteContext.Provider>
    </>
  )
}

export default VotePage
