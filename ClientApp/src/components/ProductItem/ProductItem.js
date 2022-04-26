import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const ProductItem = () =>{

    return(
        <Card>
            <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random/300×300"
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
            <CardActions sx={{
                display:'flex',
                justifyContent:'center'
            }}>
                <Button size="small" color='secondary' variant='contained'>Share</Button>
                <Button size="small" color='secondary' variant='contained'>Share</Button>
            </CardActions>
    </Card>
    )
}

export default ProductItem;