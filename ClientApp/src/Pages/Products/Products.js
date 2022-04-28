import { Box, Container } from "@mui/material";
import ProductsViewer from '../../components/ProductsViewer/ProductsViewer'
import React from "react";

const Products = () => {

    return(
        <Container fluid>
            <Box color='inherit'>
                <ProductsViewer />
            </Box>
        </Container>
    )
}

export default Products;