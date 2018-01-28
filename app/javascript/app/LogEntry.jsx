import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { spacing } from 'app/theme';
import TimelineMarker from 'app/TimelineMarker';

const LogEntry = styled(({ category, content, datetime, ...props }) => (
  <div {...props}>
    <div style={{ width: spacing.lg }}>
      <TimelineMarker />
    </div>
    <div style={{ marginLeft: spacing.sm, marginTop: 10 }}>
      <Text gutterBottom>
        {category === 'feeling' && <Text color="secondary">feeling</Text>}{content}
      </Text>
      <Caption>{moment(datetime).format('ddd, hA')}</Caption>
      <Caption>{category}</Caption>
    </div>
  </div>
))`
  width: 100%;
  display: flex;
  margin-top: ${spacing.lg}px;
`;

export default LogEntry;
