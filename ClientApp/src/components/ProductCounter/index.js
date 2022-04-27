import React, { Component } from 'react';
import { Box, Button, Paper, Typography } from "@mui/material";
const ProductCounter = () =>{

    return(
        <Box display={'flex'} sx={{
            width:150
        }}>
            <Button color='secondary' variant='contained' sx={{
                minWidth:50
            }}>-</Button>
            <Paper sx={{
                minWidth:50,
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }} >
                <Typography>
                    1
                </Typography>
            </Paper>
            <Button color='secondary' variant='contained' sx={{
                minWidth:50
            }}>+</Button>
        </Box>
    )
}

export default ProductCounter;