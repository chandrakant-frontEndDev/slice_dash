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

    const imageUploaded = ({ target }) => {
        console.log(target.files[0]);
        // const base64 = window.URL.createObjectURL(fileObj);
    }
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
                            },
                        }}
                    >
                        <Paper variant="outlined" square sx={{ padding: '1em', height: '100%' }}>
                            <Box
                                component="form"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    height: '100%'
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="outlined-basic" label="Title" type={'text'} variant="outlined" sx={{ width: '100%', margin: '1em 0em' }} />
                                <Typography variant="caption" display="block" gutterBottom>
                                    Image Preview
                                </Typography>
                                <Paper variant="outlined" sx={{ width: '100%', height: '400px', margin: '0em 0em 1em 0em' }}>

                                </Paper>
                                <Button variant="contained" component="label" endIcon={<PhotoCamera />} sx={{ margin: '1em 0em' }}>
                                    Upload
                                    <input hidden accept="image/*" multiple type="file" onChange={imageUploaded} />
                                </Button>

                                {/* <TextField id="outlined-basic" label="Password" type={'password'} variant="outlined" /> */}
                                <Button variant='contained' size='large' sx={{ margin: '1em 0em' }}>save</Button>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
