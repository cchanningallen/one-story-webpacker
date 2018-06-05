import React, { Component } from 'react';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import GlobalLoader from 'app/GlobalLoader';
import LogEntry from 'app/LogEntry';
import Text, { Title, Caption } from 'components/Text';

const spacing = {
  none: 0,
  xs: 8,
  sm: 16,
  md: 24,
  lg: 40,
};

const AppShell = styled.div`
  height: 100%;
  background: transparent;  
`;

const MainContainer = styled.div`
  padding: ${spacing.md}px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

class App extends Component {
  state = { loading: true };

  componentDidMount() {
    this.fetch('api/log_entries')
      .then(logEntries => this.setState({ logEntries, loading: false }));
  }

  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => reject(error))
    })
  }

  render() {
    const { logEntries } = this.state;

    return (
      <AppShell>
        {!logEntries && <GlobalLoader />}
        <AppBar position="static" color="default">
          <Toolbar>
            <Title color="primary">One</Title>
            <Title>Story</Title>
          </Toolbar>
        </AppBar>

        <MainContainer>
          {logEntries && logEntries.map((logEntry, key) =>
            <LogEntry key={key} {...logEntry} />
          )}
        </MainContainer>
      </AppShell>
    );
  }
}

export default App;
