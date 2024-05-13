import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

import elections from '../data/election.json'
import candidates from '../data/candidates.json'

export const VoteContext = React.createContext({
  query: {},
  setQuery: () => {},
  selectedTotalVote: {},
  selectedEachVote: {},
  election: {},
  candidate: {}
})

export default function VoteContextProvider({ children }) {
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

  const ctxValue = {
    query,
    setQuery,
    selectedTotalVote,
    selectedEachVote,
    election,
    candidate: candidates[query.year]
  }

  return (
    <VoteContext.Provider value={ctxValue}>
      {children}
    </VoteContext.Provider>
  )
}

VoteContextProvider.propTypes = {
  children: PropTypes.node
}