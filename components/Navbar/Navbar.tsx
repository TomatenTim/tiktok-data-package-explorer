import { AppBar, Toolbar, Typography } from '@mui/material'


export default function Navbar() {

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TDPE
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}
