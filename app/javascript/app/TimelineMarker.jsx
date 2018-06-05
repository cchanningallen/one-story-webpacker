import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

import Avatar from '@material-ui/core/Avatar';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const styles = {
  root: {
    color: grey[500],
    backgroundColor: grey[100],
  },
}

const TimelineMarker = ({ ...props }) => (
  <Avatar {...props}>
    <RadioButtonUncheckedIcon color="primary" />
  </Avatar>
);

export default withStyles(styles)(TimelineMarker);
