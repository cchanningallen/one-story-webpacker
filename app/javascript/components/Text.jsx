import React from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    whiteSpace: 'pre-wrap',
    display: 'inline-block',
  },
});

export const Text = ({ classes, ...props }) => {
  const className = classes.root;

  return (
    <Typography
      className={className}
      {...props}
    />
  )
};

Text.defaultProps = {
  variant: 'body1',
};

const StyledText = withStyles(styles)(Text);

export const Title = props => <StyledText variant="title" {...props} />;
export const Caption = props => <StyledText variant="caption" {...props} />;

export default StyledText;
