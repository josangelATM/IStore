import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import ProductCounter from "../ProductCounter/ProductCounter";
import { useTranslation } from 'react-i18next'

const ProductViewer = () => {
    const [productCounter,setProductCounter] = useState(1)
    const getCounterValue = value => setProductCounter(value)
    const { t, i18n } = useTranslation('products');

    return(
    <Box bgcolor={'primary.bodyBg'} maxWidth={1200} margin={'auto'}>
        <Card sx={{ display:'flex', 
                backgroundColor:'primary.bodyBg',
                color:'secondary.main'
            }} >
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
                Product Name etc
                </Typography>
                <Typography gutterBottom variant="h4" component="div" sx={{
                    fontWeight:'bold'
                }}>
                $19.00
                </Typography>
                <Typography variant="body2" >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Typography>
                <Typography variant="h6" >
                {t('items.available')} : <strong>DISPONIBLE</strong>
                </Typography>
                <Typography variant="h6" >
                {t('items.code')} : <strong>ACN023972312</strong>
                </Typography>
                <Typography variant="h6" >
                {t('items.category')} : <strong>CATEGORÍA EJEMPLO</strong>
                </Typography>
                <Typography variant="h6" >
                {t('items.type')} : <strong>TIPO EJEMPLO</strong>
                </Typography>
            </CardContent>
            <Divider/>
            <CardActions sx={{
                mt:2,
                ml:1
            }}>
                <ProductCounter getCounterValue={getCounterValue}/>
                <Button size="small" color='secondary' variant='contained' sx={{
                    height:'100%',
                    ml:2
                }}>{t('cart.addToCart')}</Button>
            </CardActions>
        </Box>
        </Card>
    </Box>
    )
}


export default ProductViewer;
