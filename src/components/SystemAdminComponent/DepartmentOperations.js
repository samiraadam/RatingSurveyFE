import React, { useState } from "react";
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
  const [addDept, setaddDept] = useState("");
  const [deleteDept, setdeleteDept] = useState("");
  const [renameDept, setrenameDept] = useState("");

  // function validateForm() {
  //   return addDept.length > 0 || deleteDept.length > 0 || renameDept.length > 0;
  // }
  // // function validateAddForm() {
  // //   return addDept.length > 0;
  // // }
  // // function validateDeleteForm() {
  // //   return deleteDept.length > 0;
  // // }
  // // function validateRenameForm() {
  // //   return renameDept.length > 0;
  // // }

  // function validateaddDept() {
  //   return alert('The Department has been added.');
  //   // if (addDept.length == 0 ){
  //   //   return addDept.length > 0;
  
  //   // }
  //   // else {
  //   // alert('The Department has been added.');
  //   // }
  // }
  // function validatedeleteDept() {
  //   return alert('The Department has been deleted.');
  //   // if (deleteDept.length == 0 ){
  //   //   return deleteDept.length > 0;
  
  //   // }
  //   // else {
  //   // alert('The Department has been deleted.');
  //   // }
  // }
  // function validatedrenameDept() {
  //   return alert('The Department has been renamed.');
  //   // if (renameDept.length == 0 ){
  //   //   return renameDept.length > 0;
  
  //   // }
  //   // else {
  //   // alert('The Department has been renamed.');
  //   // }
  // }
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
                value={addDept}
                onChange={e => setaddDept(e.target.value)}
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
            // href="Confirmation"
            // onClick={validateaddDept()}
            // disabled={!validateForm()}
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
                value={deleteDept}
                onChange={e => setdeleteDept(e.target.value)}
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
            // href="Confirmation"
            // onClick={alert('The Department has been deleted.')}
            // disabled={!validateForm()}
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
                value={renameDept}
                onChange={e => setrenameDept(e.target.value)}
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
            // href="Confirmation"
            // onClick={validatedrenameDept()}
            // disabled={!validateForm()}
          >
            Rename Department
          </Button>
        </form>    

    </div>

  );
}