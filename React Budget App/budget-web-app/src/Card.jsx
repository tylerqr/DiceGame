import React from 'react';
import { makeStyles } from '@mui/styles'; // For custom styles
import Card from '@mui/material/Card'; // Updated from @material-ui/core
import CardContent from '@mui/material/CardContent'; // Updated from @material-ui/core

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
    margin: theme.spacing(2),
  },
  envelopeIcon: {
    fontSize: 40,
    color: theme.palette.text.disabled,
  },
  cardHeader: {
    padding: theme.spacing(2),
  },
  cardContent: {
    padding: theme.spacing(2),
  },
  balanceText: {
    fontSize: 18,
    fontWeight: 700,
    color: theme.palette.text.primary,
  },
  arrowIcon: {
    fontSize: 18,
    color: theme.palette.text.secondary,
  },
}));

const EnvelopeCard = ({ title, description, balance }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <IconButton>
            <EnvelopeIcon className={classes.envelopeIcon} />
          </IconButton>
        }
        title={title}
      />
      <CardContent className={classes.cardContent}>
        <p>{description}</p>
        <p className={classes.balanceText}>{`Balance: $${balance}`}</p>
      </CardContent>
      <IconButton className={classes.arrowIcon}>
        <ArrowForwardIcon />
      </IconButton>
    </Card>
  );
};

export default EnvelopeCard;