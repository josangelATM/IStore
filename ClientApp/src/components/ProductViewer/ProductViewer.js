import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
import ProductCounter from "../ProductCounter/ProductCounter";

const ProductViewer = () => {
    const [productCounter,setProductCounter] = useState(1)
    const getCounterValue = value => setProductCounter(value)



    return(
    <Box>
        <Card sx={{ display:'flex' }}>
        <CardMedia
            component="img"
            alt="green iguana"
            sx={{
                width:'300px',
                height:'400px'
            }}
            image="https://source.unsplash.com/random/300x400"
        />
        <Box display={'flex'} flexDirection={'column'}>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div" sx={{
                    fontWeight:'bold'
                }}>
                Product Name etc {productCounter}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Typography>
            </CardContent>
            <CardActions>
                <ProductCounter getCounterValue={getCounterValue}/>
                <Button size="small" color='secondary' variant='contained'>Learn More</Button>
            </CardActions>
        </Box>
        </Card>
    </Box>
    
    )
}


export default ProductViewer;
