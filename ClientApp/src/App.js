import React, { Component, Suspense } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './custom.css'
import { useSelector } from 'react-redux';

const App = () => {
  const theme = useSelector(state => state.theme.theme)
  const darkTheme = createTheme({ //Here logic about theme
  palette: {
      primary:{
        main:'#000000'
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
        main:'#FFFFFF'
      },
      secondary:{
        main:'#000000'
      },
      warning:{
        main:'#FF0000'
      }
    }
  })

  return(
    <Suspense fallback="loading">
      <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
        <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
      </ThemeProvider>
    </Suspense>
    
  )
}


export default App;
