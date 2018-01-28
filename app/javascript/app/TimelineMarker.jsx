import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';

import Avatar from 'material-ui/Avatar';
import RadioButtonUncheckedIcon from 'material-ui-icons/RadioButtonUnchecked';

const styles = {
  avatar: {
    color: grey[500],
    backgroundColor: grey[100],
  },
}

const TimelineMarker = ({ ...props }) => (
  <Avatar {...props}>
    <RadioButtonUncheckedIcon />
  </Avatar>
);

export default withStyles(styles)(TimelineMarker);
