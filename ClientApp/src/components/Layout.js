import { Box, Container } from '@mui/material';
import React, { Component } from 'react';

import NavBar from './NavBar/NavBar';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <Box bgcolor={'primary.bodyBg'} minHeight={'100vh'}>
        <NavBar/>
        <Container maxWidth={false} sx={{
          width:'fit-content'
        }}>
          {this.props.children}
        </Container>
      </Box>
    );
  }
}
