import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import main from '../styles/main.scss';
import { Grid, Toolbar } from '@mui/material'
import DashLayout from '../components/layout/DashLayout'
import * as React from 'react';
import { useRouter } from 'next/router';
import Login from './index'

import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: '#7c4dff',
      main: '#651fff',
      dark: '#6200ea',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
})

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    router.pathname === "/" ?
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
      :
      <ThemeProvider theme={theme}>
        <DashLayout>
          <Grid container spacing={2} justifyContent="center">
            <Grid item lg={10} xs={12}>
              <Component {...pageProps} />
            </Grid>
          </Grid>
        </DashLayout>
      </ThemeProvider>
  )
}

export default MyApp
