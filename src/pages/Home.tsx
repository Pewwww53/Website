import { Box, Button, Grid, SvgIcon, Typography } from '@mui/material';
import homeimage from '../images/homepage.png'
import * as React from 'react';
function Home() {
    return (
        <Box sx={{flexGrow: 1 }} textAlign={'center'}>
            <Grid container spacing={{ xs: 3, sm: 4 }} columns={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2}} alignContent={'center'} alignItems={'center'} textAlign={'left'} justifyContent="space-evenly">
                <Grid item xs={1} sm={1} md={1}>
                    <Box >
                        <Typography
                        sx={{
                            fontFamily: 'monospace',
                            fontWeight:700,
                            fontSize: '1rem',
                            color: 'grey'
                        }}>- FREE 30 DAYS TRIAL</Typography>
                        <Typography
                        sx={{
                            borderRadius: 2,
                            fontFamily: 'Poppins',
                            fontWeight:800,
                            fontSize: '5rem',
                            color: 'black'
                        }}>The best way to showcase your project.</Typography>
                        <Typography 
                        sx={{
                            color: 'black'  ,                          
                            fontFamily: 'Poppins',
                            fontWeight:500,
                        }}>Here you can put a short description about your project</Typography>
                        <Button variant='contained'
                        sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            textTransform: 'capitalize',
                            mt: 5,
                            borderRadius: 2,
                        }}
                        >Try for free</Button>
                        <Button variant='outlined'
                        sx={{
                            ml: 2,
                            borderRadius: 2,
                            fontFamily: 'Poppins',
                            fontWeight: 700,
                            textTransform: 'capitalize',
                            color: 'black',
                            borderColor: 'black',
                            mt: 5,
                        }}
                        >See how it works</Button>
                    </Box>
                </Grid>
                <Grid item xs={1} sm={1} md={1}>
                    <img alt='HomePage' src={homeimage} width={'900'}/>
                </Grid>
            </Grid>
            <Box alignSelf={'center'} sx={{mt: 10, ml: 'auto', mr: 'auto',}} width={500}>
                <Typography
                sx={{
                    fontFamily: "Poppins",
                    fontWeight: 800,
                    color: 'black',
                    
                }}
                >Trusted by individuals and teams at the world's best companies</Typography>
            </Box>
            <Grid sx={{
                width: '5vw'
            }} container spacing={{ xs: 3, sm: 4 }} columns={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4}} alignContent={'center'} alignItems={'center'} textAlign={'center'} justifyContent="space-evenly">
                <Grid item xs={1} sm={1} md={1} >
                    <Typography 
                    sx={{
                        mb: -10,
                        fontFamily: "Poppins",
                        fontWeight: 800,
                        fontSize: '2rem',
                        color: 'grey',
                    }}>Lorem Ipsum</Typography>
                </Grid>
                <Grid item xs={1} sm={1} md={1} >
                    <Typography 
                    sx={{
                        mb: -10,
                        fontFamily: "Poppins",
                        fontWeight: 800,
                        fontSize: '2rem',
                        color: 'grey',
                    }}>Lorem Ipsum</Typography>
                </Grid>
                <Grid item xs={1} sm={1} md={1} >
                    <Typography 
                    sx={{
                        mb: -10,
                        fontFamily: "Poppins",
                        fontWeight: 800,
                        fontSize: '2rem',
                        color: 'grey',
                    }}>Lorem Ipsum</Typography>
                </Grid>
                <Grid item xs={1} sm={1} md={1} >
                    <Typography 
                    sx={{
                        mb: -10,
                        fontFamily: "Poppins",
                        fontWeight: 800,
                        fontSize: '2rem',
                        color: 'grey',
                    }}>Lorem Ipsum</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home;