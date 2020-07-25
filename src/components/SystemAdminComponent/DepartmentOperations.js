import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
      <Title>Add Department</Title>
    
      <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="departmentName"
                label="Department Name"
                name="departmentName"
                autoComplete="lname"
              />
            </Grid>  
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
            Add Department
          </Button>
        </form> 

        <br></br>   
        <br></br>


     <Title>Delete Department</Title>
      <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="departmentID"
                label="Department ID"
                name="departmentID"
                autoComplete="lname"
              />
            </Grid>  
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
            Delete Department
          </Button>
        </form>    

      <br></br>
      <br></br>
      <Title>Rename Department</Title>
      <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="departmentID"
                label="Department ID"
                name="departmentID"
                autoComplete="lname"
              />
          </Grid>

          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="departmentName"
                label="New Department Name"
                name="departmentName"
                autoComplete="lname"
              />
          </Grid>

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
            Rename Department
          </Button>
        </form>    

    </div>

  );
}