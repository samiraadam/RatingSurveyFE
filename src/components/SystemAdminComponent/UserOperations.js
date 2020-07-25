import React from 'react';
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
  return (
    // <React.Fragment>
    <div>
      <Title>Grant Role to User</Title>
      <form className={classes.form} noValidate>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="userID"
                label="User ID"
                name="userID"
                autoComplete="userID"
              />
            </Grid>
            <Grid item xs={12}>
                <br></br>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Choose Role Name</FormLabel>
                    <RadioGroup aria-label="roleName" name="roleName">
                        <FormControlLabel value="grantsysadminrole" control={<Radio />} label="System Admin" />
                        <FormControlLabel value="grantdepadminrole" control={<Radio />} label="Department Admin" />
                    </RadioGroup>
                </FormControl>
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // style={{margin: "2px"}}
            href="Confirmation"
          >
            Grant Role
          </Button>
        </form>

        <br></br>
        <br></br>

        <Title>Revoke Role from User</Title>
        <form className={classes.form} noValidate>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="userID"
                label="User ID"
                name="userID"
                autoComplete="userID"
              />
            </Grid>
            <Grid item xs={12}>
                <br></br>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Choose Role Name</FormLabel>
                    <RadioGroup aria-label="roleName" name="roleName">
                        <FormControlLabel value="removesysadminrole" control={<Radio />} label="System Admin" />
                        <FormControlLabel value="removedepadminrole" control={<Radio />} label="Department Admin" />
                    </RadioGroup>
                </FormControl>
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // style={{margin: "2px"}}
            href="Confirmation"
          >
            Revoke Role
          </Button>
        </form>  


        <br></br>
        <br></br>
        
        <Title>Delete User</Title>
        <form className={classes.form} noValidate>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="userID"
                label="User ID"
                name="userID"
                autoComplete="userID"
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
            Delete User
          </Button>
        </form>  

        <br></br>
        <br></br>


        <Title>Search User</Title>
        <form className={classes.form} noValidate>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
                autoComplete="userName"
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
            Search User
          </Button>
        </form>    

      </div>
  );
}