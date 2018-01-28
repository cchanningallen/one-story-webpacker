// import React from 'react';
// import AppBar from 'material-ui/AppBar';
// import Toolbar from 'material-ui/Toolbar';
//
// import Text from 'components/Text';
//
// const App = props => (
//   <div>
//     <AppBar position="static" color="default">
//       <Toolbar>
//         <Text type="title" color="secondary">One</Text>
//         <Text type="title" color="textSecondary">Story</Text>
//       </Toolbar>
//     </AppBar>
//
//
//   </div>
// );
//
// export default App;

import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { withStyles } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import RadioButtonUncheckedIcon from 'material-ui-icons/RadioButtonUnchecked';

import GlobalLoader from 'app/GlobalLoader';
import LogEntry from 'app/LogEntry';

const spacing = {
  none: 0,
  xs: 8,
  sm: 16,
  md: 24,
  lg: 40,
};

const AppShell = styled.div`
  height: 100%;
  background: #fff;  
`;

const MainContainer = styled.div`
  padding: ${spacing.md}px;
`;



class App extends Component {
  state = { loading: true };

  componentDidMount() {
    this.fetch('api/log_entries')
      .then(logEntries => this.setState({ logEntries, loading: false }));
  }

  renderLogEntries(logEntries) {
    return logEntries.map(logEntry => <LogEntry {...logEntry} />)
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
            <Title color="secondary">One</Title>
            <Title>Story</Title>
          </Toolbar>
        </AppBar>

        <MainContainer>
          {logEntries && this.renderLogEntries(logEntries)}
        </MainContainer>
      </AppShell>
    );
  }
}

export default App;
