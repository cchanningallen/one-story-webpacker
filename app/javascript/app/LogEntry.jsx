import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';

import { spacing } from 'app/theme';
import TimelineMarker from 'app/TimelineMarker';
import Text, { Caption } from 'components/Text';

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    marginTop: spacing.lg,
  },
  details: {
    marginTop: spacing.sm,
    display: 'flex',
    alignItems: 'center',
  },
});

const LogEntry = ({ category, content, datetime, classes, ...props }) => (
  <div className={classes.root} {...props}>
    <div style={{ width: spacing.lg }}>
      <TimelineMarker />
    </div>
    <div style={{ marginLeft: spacing.sm }}>
      {category === 'feeling' && <Text color="primary">feeling </Text>}
      <Text>{content}</Text>
      <div className={classes.details}>
        <Caption>{moment(datetime).calendar(null, { sameElse: 'M/D/YY' })}</Caption>
        <Caption>&nbsp;•&nbsp;</Caption>
        <Caption>{category || 'thought'}</Caption>
      </div>
    </div>
  </div>
);

export default withStyles(styles)(LogEntry);
