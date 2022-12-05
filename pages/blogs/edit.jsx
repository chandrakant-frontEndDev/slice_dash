import { PhotoCamera } from '@mui/icons-material';
import { Grid, Toolbar, Typography, Box, Paper, TextField, FormControl, InputLabel, Button } from '@mui/material'
import React from 'react'

export default function edit() {
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
            <Toolbar />
            <Toolbar />
            <Grid container>
                <Grid item>
                    <Typography variant='h4' fontWeight={'bold'}>
                        Edit Blog
                    </Typography>
                </Grid>
                <Grid item lg={12}>
                    <Box
                        sx={{
                            display: 'flex',
                            margin: '1em 0em',
                            '& > :not(style)': {
                                // m: 1,
                                width: '100%',
                                height: 228,
                            },
                        }}
                    >
                        <Paper variant="outlined" square sx={{ padding: '1em' }}>
                            <Box
                                component="form"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    '& > :not(style)': { m: 1 },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <h1 contentEditable="true">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, voluptates!</h1>
                                <TextField id="outlined-basic" label="Title" type={'text'} variant="outlined" sx={{ minWidth: '50%' }} />
                                <Button variant="contained" component="label" endIcon={<PhotoCamera />}>
                                    Upload
                                    <input hidden accept="image/*" multiple type="file" />
                                </Button>

                                {/* <TextField id="outlined-basic" label="Password" type={'password'} variant="outlined" /> */}
                                <Button variant='contained' size='large'>save</Button>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
