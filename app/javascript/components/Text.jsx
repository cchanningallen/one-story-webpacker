import Typography from 'material-ui/Typography';

const Text = props => <Typography type="body1" style={{ whiteSpace: 'pre-wrap', display: 'inline-block' }} {...props} />;
export const Title = props => <Typography type="title" {...props} />;
export const Caption = props => <Typography type="caption" {...props} />;

export default Typography;
