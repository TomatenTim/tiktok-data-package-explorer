import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Navbar from '../components/Navbar/Navbar';

function App({ Component, pageProps }: AppProps) {


  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      {/* TODO: fix size on PC / errors on start */}
      <div style={theme.mixins.toolbar}></div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;