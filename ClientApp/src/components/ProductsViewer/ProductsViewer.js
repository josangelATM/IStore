import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import ProductItem from "../ProductItem/ProductItem";

const ProductsViewer = () =>{
    return(
        <Box bgcolor='primary.bodyBg' color='secondary.main'>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={10} md={4} lg={3}>
                    <ProductItem/>
                </Grid>
                <Grid item xs={10} md={4} lg={3}>
                    <ProductItem/>
                </Grid>
                <Grid item xs={10} md={4} lg={3}>
                    <ProductItem/>
                </Grid>
                <Grid item xs={10} md={4} lg={3}>
                    <ProductItem/>
                </Grid>
                <Grid item xs={10} md={4} lg={3}>
                    <ProductItem/>
                </Grid>
                <Grid item xs={10} md={4} lg={3}>
                    <ProductItem/>
                </Grid>
            </Grid>
        </Box> 
    )
}

export default ProductsViewer;