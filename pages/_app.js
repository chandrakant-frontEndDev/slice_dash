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

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    router.pathname === "/" ?
      <Login />
      :
      <DashLayout>
        <Grid container spacing={2} justifyContent="center">
          <Grid item lg={10} xs={12}>
            <Component {...pageProps} />
          </Grid>
        </Grid>
      </DashLayout>
  )
}

export default MyApp
