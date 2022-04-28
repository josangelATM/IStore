import { Box } from "@mui/material";
import React from "react";
import ProductsTabs from "../../components/ProductsTabs/ProductsTabs";
import ProductViewer from "../../components/ProductViewer/ProductViewer";

const Product = () => {

    return(
        <Box>
            <ProductViewer/>
            <ProductsTabs/>
        </Box>
    )
}

export default Product;