
import { Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'

const Home: NextPage = () => {

  const theme = useTheme();
  const { t } = useTranslation('common');

  return (
    <>
      <Box sx={{
        marginTop: 5,
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Box
          sx={{
            padding: 1,
            borderRadius: 3,
            minWidth: '350px',
            maxWidth: '1000px',
            width: '75vw',

            display: 'flex',
            justifyContent: 'center',

            background: theme.palette.grey[900],
          }}
        >
          <Typography variant='h5'>
            TikTok Data Package Explorer
          </Typography>
          <br></br>
          

        </Box>

      </Box>
      
      {t('helloWorld')}

    </>
  )
}

export default Home
