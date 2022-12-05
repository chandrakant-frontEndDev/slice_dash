import * as React from 'react'
import { Grid, Toolbar, Paper, Box, TextField, Typography, Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton  } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
export default function Home() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item lg={12}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              minHeight: '100vh',
              justifyContent: 'center',
              alignItems: 'center',
              '& > :not(style)': {
                m: 1,
                // width: 128,
                // height: 128,
              },
            }}
          >
            <Paper elevation={3} sx={{
              padding: '2em',
              width: '25rem'
            }}>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Welcome to Sliceledger! 👋🏻
                </Typography>
                <TextField id="outlined-basic" label="Email" type={'email'} variant="outlined" />
                {/* <TextField id="outlined-basic" label="Password" type={'password'} variant="outlined" /> */}
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <Button variant='contained' size='large'>Login</Button>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
