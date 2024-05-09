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
  const [selectedYear, setSelectedYear] = React.useState(params?.voteId)
  const [selectedCity, setSelectedCity] = React.useState('all')
  const [selectedDistrict, setSelectedDistrict] = React.useState('all')

  const election = elections[selectedYear]
  const cityData = election['縣市']
  const counties = Object.keys(cityData)
  const districtData = cityData[selectedCity]
  const districts = districtData && Object.keys(districtData['鄉鎮市區'])

  let selectedTotalVote = {}
  let selectedEachVote = {}
  if (selectedCity === 'all') {
    selectedTotalVote = election['全國']
    selectedEachVote = cityData
  } else if (selectedCity !== 'all' && selectedDistrict === 'all') {
    selectedTotalVote = districtData
    selectedEachVote = districtData['鄉鎮市區']
  } else {
    selectedTotalVote = districtData['鄉鎮市區'][selectedDistrict]
    selectedEachVote = districtData['鄉鎮市區'][selectedDistrict]['村里']
  }


  return (
    <> 
      <HeaderContext.Provider
        value={{ 
          counties,
          districts,
          selectedYear,
          setSelectedYear,
          selectedCity,
          setSelectedCity,
          selectedDistrict,
          setSelectedDistrict
        }} 
      >
        <VoteHeader />
      </HeaderContext.Provider>

      <VoteContext.Provider 
        value={{ 
          selectedTotalVote, 
          selectedEachVote, 
          candidate: candidates[selectedYear] 
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
              selectedCity,
              setSelectedCity,
              selectedDistrict,
              setSelectedDistrict
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
