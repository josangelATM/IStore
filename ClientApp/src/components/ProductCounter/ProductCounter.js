import React, { Component, useEffect, useState } from 'react';
import { Box, Button, Input, Paper, TextField, Typography } from "@mui/material";
const ProductCounter = ({getCounterValue}) =>{
    const [counter,setCounter] = useState(1)

    const handleChange = (increment) =>{
        increment ? setCounter(parseInt(counter)+1,) : setCounter(parseInt(counter)-1)
    }

    const handleChangeText = (value) =>{
        if(value=>0){
            console.log(value)
            setCounter(value)
        }
    }
 
    useEffect(() =>{
        getCounterValue(counter)
    },[counter])

    return(
        <Box display={'flex'} sx={{
            width:150,
            heigth:50
        }}>
            <Button color='secondary' variant='contained' onClick={() => handleChange(false)} disabled={counter<=0} sx={{
                minWidth:50
            }}>-</Button>
            <Paper sx={{
                minWidth:50,
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }} >
                <Input value={counter} size={'small'} type={'number'} disableUnderline={true} onChange={(e) => handleChangeText(e.target.value)} inputProps={{sx:{textAlign:'center'}}
                }/>
            </Paper>
            <Button color='secondary' variant='contained' onClick={() => handleChange(true)} sx={{
                minWidth:50
            }}>+</Button>
        </Box>
    )
}

export default ProductCounter;