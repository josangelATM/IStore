
import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ProductsTabs = () =>{
    const { t, i18} = useTranslation('products')

    return(
        <Box mt={4}>
            <Tabs>
                <TabList>
                    <Tab>{t('tabs.description')}</Tab>
                    <Tab>{t('tabs.reviews')}</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </Box>
    )
}

export default ProductsTabs;