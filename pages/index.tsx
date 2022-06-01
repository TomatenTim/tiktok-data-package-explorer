
import { Badge, BadgeProps, SxProps, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useMemo } from 'react'
import DragAndDropInput from '../components/DragAndDropInput'

// TODO: move to lib

const Home: NextPage = () => {

  const theme = useTheme();
  const { t } = useTranslation('index');



  // sx props to center the content
  const sxPropsCenter: SxProps = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 5,
  }

  // Props of the badge component 
  const badgeProps: BadgeProps = useMemo(() => ({
    color: 'primary',
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    sx: {
      display: 'block',
      border: 1,
      borderColor: theme.palette.info.main,
      borderRadius: '0.5rem',
      width: '90%',
      padding: '10px',
    }
  }), [theme.palette.info.main]);










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

            background: theme.palette.grey[900],
          }}
        >
          <Typography
            variant='h5'
            sx={sxPropsCenter}
          >
            TikTok Data Package Explorer
          </Typography>


          {/* Step 1: Download you TikTok data package */}
          <Box
            sx={sxPropsCenter}
          >
            <Badge
              badgeContent={1}
              {...badgeProps}
            >
              {t('downloadDataPackageInfoText')}<br/>
              <Link href="/help/download-data-package">
                {t('downloadDataPackageLinkText')}
              </Link>
            </Badge>
          </Box>


          {/* Step 2: Upload your TikTok Data Package */}
          <Box
            sx={sxPropsCenter}
          >
            <Badge
              badgeContent={2}
              {...badgeProps}
            >
              <DragAndDropInput />
            </Badge>
          </Box>

          



          hi
        </Box>


      </Box>

      {t('helloWorld')}

    </>
  )
}

export default Home
