import React, { Component, Suspense } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './custom.css'
import { useSelector } from 'react-redux';
import Products from './Pages/Products/Products'
import ProductViewer from './components/ProductViewer/ProductViewer';
import Product from './Pages/Product/Product';

const App = () => {
  const theme = useSelector(state => state.theme.theme)
  const darkTheme = createTheme({ //Here logic about theme
  palette: {
      primary:{
        main:'#171717',
        bodyBg:'#202124'
      },
      secondary:{
        main:'#FFFFFF'
      },
      warning:{
        main:'#FF0000'
      }
  },
  });

  const lightTheme = createTheme({
    palette:{
      primary:{
        main:'#FFFFFF',
        bodyBg:'#FFFFFF'
      },
      secondary:{
        main:'#171717'
      },
      warning:{
        main:'#FF0000'
      }
    }
  })

  return(
    <Suspense fallback="loading">
      <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
        <Layout >
          <Route exact path='/' component={Home} />
          <Route path='/product' component={Product} />
          <Route path='/fetch-data' component={FetchData} />
          <Route path='/products' component={Products}/>
        </Layout>
      </ThemeProvider>
    </Suspense>
    
  )
}


export default App;
