export default function getMaxVotedParty (voteData) {
  let maxVotedParty = '' 
  Object.entries(voteData).forEach(([party, partyData]) => {
    if (typeof partyData === 'object' && Object.hasOwnProperty.call(partyData, 'total')) {
      if (!maxVotedParty || partyData.total > voteData[maxVotedParty].total) {
        maxVotedParty = party;
      }
    }
  })
  
  return maxVotedParty
}