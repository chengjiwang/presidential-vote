import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AppBar, Toolbar, Box, Container, Select, FormControl, MenuItem, Typography, Stack } from '@mui/material'
import styled from '@emotion/styled'

import { HeaderContext } from '../pages/Vote.jsx'
import { yearList } from '../utils/yearList.js'
import LogoIcon from '../assets/logo.svg'
import TitleIcon from '../assets/home_title.svg'

const ImgLogo = styled.img`
  width: 53px;
  @media (max-width: 600px) {
    width: 37px;
  }
`
const ImgTitle = styled.img`
  width: 251px;
  @media (max-width: 600px) {
    width: 177px;
  }
`

export default function VoteHeader() {
  const navigate = useNavigate()

  const { 
    counties,
    districts,
    selectedYear,
    setSelectedYear,
    selectedCity,
    setSelectedCity,
    selectedDistrict,
    setSelectedDistrict } = React.useContext(HeaderContext)


  const handleYearChange = (event) => {
    setSelectedYear(event.target.value)
    navigate(`/vote/${event.target.value}`)
  }

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value)
    setSelectedDistrict('all')
  }

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value)
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: 'common.white',
        p: { xs: '0.625rem 0.75rem', lg: '0.75rem 1.5rem' }
      }}
    >
      <Container maxWidth="1920" disableGutters>
        <Toolbar
          disableGutters
          variant="regular"
          sx={{
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: { xs: '100%', lg: 'auto' },
              mb: { xs: 2, lg: 0 }
            }}
          >
            <Stack
              direction='row'
              spacing={1}
              sx={{
                mr: { xs: 'auto', lg: 3 }
              }}
            >
              <ImgLogo src={LogoIcon} alt="Logo" />
              <ImgTitle src={TitleIcon} alt="title" />
            </Stack>

            <Stack
              direction='row'
              spacing={1.5}
            >
              <Typography
                alignItems='center'
                variant="h6"
                component="h6"
                color="text.primary"
                fontWeight="bold"
                fontSize={16}
                sx={{
                  width: '100%',
                  display: { xs: 'none', lg: 'flex' }
                }}
              >
                選擇年份
              </Typography>

              <FormControl
                size="small"
                sx={{
                  minWidth: { xs: 76, md: 120 }
                }}
              >
                <Select
                  value={selectedYear}
                  onChange={handleYearChange}
                  displayEmpty
                  color='bg'
                  sx={{
                    borderRadius: 8,
                    backgroundColor: 'bg.main',
                    color: 'text.primary',
                    px: 1,
                    height: { xs: '1.875rem', md: '2.5rem' },
                    fontSize: { xs: 14, md: 16 }
                  }}
                >
                  {[...yearList].reverse().map(year => (
                    <MenuItem value={year} key={year}>{year}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
          </Box>

          <Box
            sx={{
              display: 'flex',
              ml: { lg: 2 },
              flexGrow: { xs: 1, lg: 0 }
            }}
          >
            <FormControl
              size="small"
              sx={{
                minWidth: { xs: 164, md: 194 },
                width: '100%'
              }}
            >
              <Select
                value={selectedCity}
                onChange={handleCityChange}
                displayEmpty
                color='bg'
                sx={{
                  borderRadius: '2rem 0 0 2rem',
                  backgroundColor: 'bg.main',
                  color: 'text.primary',
                  px: 1,
                  height: { xs: '1.875rem', md: '2.5rem' },
                  fontSize: { xs: 14, md: 16 }
                }}
              >
                <MenuItem value='all'>全部縣市</MenuItem>
                {counties.map(item => <MenuItem value={item} key={item}>{item}</MenuItem>)}
              </Select>
            </FormControl>

            <FormControl
              size="small"
              sx={{
                minWidth: { xs: 164, md: 194 },
                width: '100%'
              }}
            >
              <Select
                value={selectedDistrict}
                onChange={handleDistrictChange}
                displayEmpty
                color='bg'
                sx={{
                  borderRadius: '0 2rem 2rem 0',
                  backgroundColor: 'bg.main',
                  color: 'text.primary',
                  px: 1,
                  height: { xs: '1.875rem', md: '2.5rem' },
                  fontSize: { xs: 14, md: 16 }
                }}
              >
                <MenuItem value='all'>全部區域</MenuItem>
                {districts?.map(item => <MenuItem value={item} key={item}>{item}</MenuItem>)}
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
