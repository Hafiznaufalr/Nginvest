import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import ImageIcon from '@material-ui/icons/Image';
import ClipIcon from '@material-ui/icons/Notes';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';

// import img from '../../../public/assets/toko.jpg'

const styles = theme => ({
  card: {
    maxWidth: 700,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[500],
  },
  judul: {
    marginLeft: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
  divider: {
    height: 2,
  },
  button: {
    margin: theme.spacing.unit,
    float:'right'
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class PostCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <Typography className={classes.judul} >Make a Post</Typography>
        <Divider className={classes.divider} />
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              H
            </Avatar>
          }
          subheader="What are you thinking, hafiz?"
        />
        <Divider className={classes.divider} />
        <IconButton aria-label="Picture">
          <ImageIcon />
          <Typography>Image</Typography>
        </IconButton>
        <IconButton aria-label="File">
          <ClipIcon />
          <Typography>File</Typography>
        </IconButton>
        <Button variant="contained" color="primary" className={classes.button}>
        Upload
        <CloudUploadIcon className={classes.rightIcon} />
      </Button>
      </Card>
    );
  }
}

PostCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostCard);