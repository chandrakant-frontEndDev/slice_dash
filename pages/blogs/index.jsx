import React from 'react'
import { Box, Grid, Toolbar, Typography, Card, CardMedia, CardContent, CardActions, Button, Paper } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';

export default function Blogs() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }} >
                <Toolbar />
                <Toolbar />
                <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                    All Blogs
                </Typography>
                <Grid container rowSpacing={6} spacing={{ xs: 2, md: 3 }} >
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image="https://sliceledger.io/_next/static/media/blog4.ae484bfd.png"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link href={'/blogs/edit'} style={{ textDecoration: "none" }}>
                                        <Button size="small" variant='text'>Edit</Button>
                                    </Link>
                                    <Button size="small" color='error' variant='text' disableElevation>Delete</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                    <Grid item xs={12} sm={6} md={4} >
                        <Box
                            sx={{
                                display: 'flex',
                                '& > :not(style)': {
                                    // m: 1,
                                    width: '21.5rem',
                                    height: 228,
                                },
                            }}
                        >
                            <Paper variant="outlined" square sx={{ display: 'flex', justifyContent: 'center', alignItem: 'center', border: '1px dashed #c9c9c9' }}>
                                <Link href={'/blogs/edit'} style={{width: '100%', textDecoration:'none'}}>
                                    <Button sx={{ width: '100%', height: '100%' }} startIcon={<AddIcon />} variant="text">Add Blog</Button>
                                </Link>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
                <Toolbar />

            </Box>
        </>
    )
}
