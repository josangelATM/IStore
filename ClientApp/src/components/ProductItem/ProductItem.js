import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ProductCounter from "../ProductCounter/ProductCounter";

const ProductItem = () =>{
    const [productCounter,setProductCounter] = useState(1)
    const { t, i18n } = useTranslation('products');
    const getCounterValue = value => setProductCounter(value)

    return(
        <Card>
            <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random/300×300"
                alt="green iguana"
            />
            <CardContent sx={{
                textAlign:'center'
            }}>
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
                flexDirection:'column',
                justifyContent:'center',
            }}>
                <ProductCounter getCounterValue={getCounterValue}/>
                <Button size="small" color='secondary' variant='contained' sx={{
                    mt:2
                }}>{t('cart.addToCart')}</Button>
            </CardActions>
        </Card>
    )
}

export default ProductItem;