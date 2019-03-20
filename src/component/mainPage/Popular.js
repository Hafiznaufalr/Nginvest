import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import classnames from 'classnames';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import UpIcon from '@material-ui/icons/ArrowUpward';
import DownIcon from '@material-ui/icons/ArrowDownward';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

// import img from '../../../public/assets/toko.jpg'

const styles = theme => ({
  card: {
    maxWidth: 400,
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
    backgroundColor: red[500],
  },
  judul: {
    marginLeft: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
  trend: {
    marginLeft: 5,
    fontSize: 20,
  },
  sTrend: {
    marginLeft: 5,
    fontSize: 15,
    colors: 'inherit',
  },
  divider: {
    height: 2,
  },
  button: {
    margin: theme.spacing.unit,

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
  icoUp:{
    float:'right',
    marginTop:10,
    fontSize:35,
    color: green[600]
  },
  icoDown:{
    float:'right',
    marginTop:10,
    fontSize:35,
    color: red[600]
  }
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
        <Typography className={classes.judul} >Trending Topics</Typography>
        <Divider className={classes.divider} />

        <CardContent
          >
          <Typography className={classes.trend}>#UMKM
          <UpIcon className={classes.icoUp}/>
          </Typography>

          <Typography className={classes.sTrend}>10.000 Post</Typography>
        </CardContent>

        <CardContent>
          <Typography className={classes.trend}>#TokoHijab
          <UpIcon  className={classes.icoUp}/></Typography>
          <Typography className={classes.sTrend}>5.000 Post</Typography>
        </CardContent>

        <CardContent>
          <Typography className={classes.trend}>#MebelKayu
          <DownIcon className={classes.icoDown}/></Typography>
          <Typography className={classes.sTrend}>4.000 Post</Typography>
        </CardContent>

        <CardContent>
          <Typography className={classes.trend}>#KangYu
          <UpIcon className={classes.icoUp}/></Typography>
          <Typography className={classes.sTrend}>3.000 Post</Typography>
        </CardContent>

        <CardContent>
        <Typography className={classes.trend}>#Jajanan
       
        <DownIcon className={classes.icoDown}/></Typography>
        <Typography className={classes.sTrend}>1.000 Post</Typography>
        </CardContent>
      </Card>
    );
  }
}

PostCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostCard);