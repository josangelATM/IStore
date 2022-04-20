import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './custom.css'

const darkTheme = createTheme({ //Here logic about theme
  palette: {
    mode: 'light',
  },
});

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <ThemeProvider theme={darkTheme}>
        <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
      </ThemeProvider>
      
    );
  }
}
