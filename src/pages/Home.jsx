import { Link } from 'react-router-dom'
import { Button, Box, Container, Typography, Grid } from '@mui/material'
import styled from '@emotion/styled';

import LogoIcon from '../assets/logo.svg'
import TitleIcon from '../assets/home_title.svg'
import Candidate1Icon from '../assets/candidate1.svg'
import Candidate2Icon from '../assets/candidate2.svg'
import Candidate3Icon from '../assets/candidate3.svg'
import Candidate4Icon from '../assets/candidate4.svg'
import Candidate5Icon from '../assets/candidate5.svg'
import Candidate6Icon from '../assets/candidate6.svg'

const ImgLogo = styled.img`
  width: 137px;
  margin-bottom: 1.5rem;
`;
const ImgTitle = styled.img`
  width: 525px;
  margin-bottom: 1.5rem;
  @media (max-width: 600px) {
    width: 287px;
  }
`;

const ImgCandidate = styled.img`
  width: 100%;
`;

const years = ['2020', '2016']

function HomePage() {
  return (
    <>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Box sx={{ mt: 12 }}>
          <div>
            <ImgLogo src={LogoIcon} alt="Logo" />
          </div>
          <div>
            <ImgTitle src={TitleIcon} alt="title" />
          </div>

          <Typography variant="h5" component="h2" align='center' color="primary" fontWeight="bold" sx={{ my: 3 }}>
            選擇查詢年份
          </Typography>

          {[...years].reverse().map(year => {
            return (
              <Link to={`/vote/${year}`} key={year}>
                <Button variant="contained" color='bg' size="large" sx={{ width: 162, borderRadius: 16, fontWeight: 700, fontSize: 16, mr: 2, mb: 2, py: 1.5 }}>
                  {year}
                </Button>
              </Link>
            )
          })}
        </Box>
      </Container>

      <Container 
        maxWidth="1920px" 
        sx={{
          position: 'fixed',
          bottom: -25,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
        }}
      >
        <Grid container spacing={0}>
          <Grid item sm={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <ImgCandidate src={Candidate1Icon} />
          </Grid>
          <Grid item sm={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <ImgCandidate src={Candidate2Icon} />
          </Grid>
          <Grid item xs={3} sm={2}>
            <ImgCandidate src={Candidate3Icon} />
          </Grid>
          <Grid item xs={3} sm={2}>
            <ImgCandidate src={Candidate4Icon} />
          </Grid>
          <Grid item xs={3} sm={2}>
            <ImgCandidate src={Candidate5Icon} />
          </Grid>
          <Grid item xs={3} sm={2}>
            <ImgCandidate src={Candidate6Icon} />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default HomePage
