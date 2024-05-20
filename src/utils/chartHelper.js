import elections from "../data/election.json"
import { partyColor } from '../utils/partyColor.js'

export function getPartyVote() {
  const partyVote = {
    numbers: [],
    rates: []
  }
  
  Object.keys(elections).forEach((year) => {
    const yearData = elections[year]["全國"]
    const voteNumber = {
      year: year,
    };
    const voteRate = {
      year: year,
    };

    Object.entries(yearData).forEach(([key, value]) => {
      if (typeof value === "object") {
        voteNumber[key] = value.total
        voteRate[key] = value.rate
      }
    });
    partyVote.numbers.push(voteNumber)
    partyVote.rates.push(voteRate)
  })

  return partyVote
}

const barValueFormatter = (value) => {
  if (!value) return
  return `${value.toLocaleString()} 票`
}

export const lineValueFormatter = (value) => {
  if (!value) return
  return `${value}%`
}

export function getSeriesData (partyVote) {
  const seriesData = {
    bar: [],
    line: []
  }
  
  const parties = new Set()
  partyVote.numbers.forEach(item => {
    Object.keys(item).forEach(key => {
      if (key !== "year") {
        parties.add(key)
      }
    })
  })
  
  parties.forEach(party => {
    const common = {
      dataKey: party,
      label: party,
      color: partyColor[party]
    }
  
    seriesData.bar.push({
      ...common,
      stack: (party === '民進黨' || party === '國民黨') ? undefined : 'other',
      valueFormatter: barValueFormatter
    })
    seriesData.line.push({
      ...common,
      valueFormatter: lineValueFormatter
    })
  })

  return seriesData
}