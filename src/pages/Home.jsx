import { Link } from 'react-router-dom'
import { Button, Box, Container, Typography, Grid, Stack } from '@mui/material'
import styled from '@emotion/styled';

import { yearList } from '../utils/yearList.js'
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
`;
const ImgTitle = styled.img`
  width: 525px;
  @media (max-width: 600px) {
    width: 287px;
  }
`;

const candidateLogos = [
  Candidate1Icon,
  Candidate2Icon,
  Candidate3Icon,
  Candidate4Icon,
  Candidate5Icon,
  Candidate6Icon,
]

function HomePage() {
  return (
    <Container>
      <Stack
        height='100vh'
        justifyContent='space-between'
      >
        <Stack spacing={3} component='section' sx={{ mt: 12 }}>
          <Stack spacing={2} alignItems='center'>
            <ImgLogo src={LogoIcon} alt="Logo" />
            <ImgTitle src={TitleIcon} alt="title" />
          </Stack>

          <Typography
            variant="h5"
            component="h2"
            align='center'
            color="primary"
            fontWeight="bold"
          >
            選擇查詢年份
          </Typography>

          <Box>
            <Grid
              container
              pl={0}
              spacing={2}
              component='ul'
            >
              {yearList.map(year => (
                <Grid
                  item
                  xs={6}
                  md={3}
                  xl={2.4}
                  key={year}
                  component='li'
                  sx={{ listStyle: 'none' }}
                >
                  <Link to={`/vote/${year}`} key={year}>
                    <Button
                      fullWidth
                      variant="contained"
                      color='bg'
                      size="large"
                      sx={{
                        borderRadius: 16,
                        fontWeight: 700,
                        fontSize: 16,
                      }}
                    >
                      {year}
                    </Button>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>

        <Stack direction='row' component='section'>
          <Grid
            container
            spacing={0}
            wrap='nowrap'
            overflow='hidden'
            mb={{ xs: '-3%', md: '-2%' }}
          >
            {candidateLogos.map((logo, index) => (
              <Grid item xs={3} sm={2} key={index}>
                <img src={logo} style={{ width: '100%' }} />
              </Grid>
            ))}
          </Grid>
        </Stack>

      </Stack>
    </Container>
  )
}

export default HomePage
