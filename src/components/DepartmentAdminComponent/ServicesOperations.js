import React, { useState } from "react";
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  function validateForm() {
    return name.length > 0 && service.length > 0;
  }

  function confirm() {
    if (name.length == 0 && service.length == 0){
      return name.length > 0 && service.length > 0;

    }
    else {
    alert('Your service has been created');
    }
  }
  return (
    // <React.Fragment>
    <div>
      <Title>Create Service</Title>
      <form className={classes.form} noValidate>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="serviceName"
                label="Service Name"
                name="serviceName"
                autoComplete="serviceName"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="serviceDescription"
                label="Service Description"
                name="servieDescription"
                autoComplete="sDescription"
                value={service}
                onChange={e => setService(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Public Facing Service?"
              />
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // style={{margin: "2px"}}
            onClick ={confirm}
            disabled={!validateForm()}
          >
            Create Service
          </Button>
        </form>

        <br></br>
        <br></br>

        <Title>Delete Service</Title>
        <form className={classes.form} noValidate>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="serviceID"
                label="Service ID"
                name="serviceID"
                autoComplete="serviceID"
              />
            </Grid>
            <br></br>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // style={{margin: "2px"}}
            href="Confirmation"
          >
            Delete Service
          </Button>
        </form>  


        <br></br>
        <br></br>
        
        <Title>Update Service</Title>
        <form className={classes.form} noValidate>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="servivceID"
                label="Service ID"
                name="serviceID"
                autoComplete="serviceID"
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="serviceName"
                label="New Service Name"
                name="serviceName"
                autoComplete="serviceName"
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="serviceDescription"
                label="New Service Description"
                name="servieDescription"
                autoComplete="sDescription"
              />
            </Grid>
            <br></br>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // style={{margin: "2px"}}
            href="Confirmation"
          >
            Update Service
          </Button>
        </form>  
        <br></br>
        <br></br>
        <Title>Search Service</Title>
        <form className={classes.form} noValidate>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="serviceName"
                label="Service Name"
                name="serviceName"
                autoComplete="serviceID"
              />
            </Grid>
            <br></br>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // style={{margin: "2px"}}
            href="Confirmation"
          >
            Search Service
          </Button>
        </form>  

      </div>
  );
}