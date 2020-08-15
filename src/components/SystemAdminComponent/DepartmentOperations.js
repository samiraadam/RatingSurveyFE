import React, { useEffect, useState } from "react";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

function createDept() {
  let search = window.location.search;
  let params1 = new URLSearchParams(search);
  let deptID = params1.get('departmentID');
  let deptName = params1.get('departmentName')

  const UNORATER_API_URL_1 = 'http://localhost:8080/api/systemadmin/createdepartment';

  const SYS_ADMIN_TOKEN =  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTk3MzA1MTIzLCJleHAiOjE1OTc5MDk5MjN9.kkOBRpztFWP6vnqvn45U7ZsyQ3E2QnljMgVCrsszVUR01QyiGjfUavgPaKc5ZJVYTPdb0Z1GY81RB5t9H68FBA'
  
  if ( deptName != null &&  deptID == null) {

    useEffect(() => {
      axios.get(`${UNORATER_API_URL_1}` + '/' + `${deptName}`, {
        headers: {
          'Authorization': `Bearer ${SYS_ADMIN_TOKEN}` 
        }})
          .then(res => {
              if (res.status === 200) {
                alert(res.data.message)
                window.location.reload(false)       
              }
          })
          .catch(err => {
              if (deptID != null) {
                alert("Something went wrong: " + err.message);
              }
  
          })          
    }, []);
    
  }
}

function delDept() {

  let search = window.location.search;
  let params1 = new URLSearchParams(search);
  let deptID = params1.get('departmentID');
  let deptName = params1.get('departmentName')
  let newName = params1.get('newName')

  const UNORATER_API_URL_2 = 'http://localhost:8080/api/systemadmin/delete';
  const SYS_ADMIN_TOKEN =  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNTk3NDU5ODI4LCJleHAiOjE1OTgwNjQ2Mjh9.eKubtUKcENUqheNUjGaunBxfUOZfvrBO-eKpHPIC_dNSEHc5nA1P3Ko_bnZ5pnD5qiQ94JYK7l6dB7Htqt4ZrQ'
  
  if (deptName == null && deptID != null && newName == null) {

    useEffect(() => {
      axios.get(`${UNORATER_API_URL_2}` + '/' + `${deptID}`, {
        headers: {
          'Authorization': `Bearer ${SYS_ADMIN_TOKEN}` 
        }})
          .then(res => {
              if (res.status === 200) {
                alert(res.data.message)
                window.location.reload(false)       
              }
          })
          .catch(err => {
              if (deptID != null) {
                alert("Something went wrong: " + err.message)
              }
  
          })          
    }, []);

  }
}


function renameDept() {

  let search = window.location.search;
  let params1 = new URLSearchParams(search);
  let deptID = params1.get('departmentID');
  let newName = params1.get('newName')
  let deptName = params1.get('departmentName')


  const UNORATER_API_URL_2 = 'http://localhost:8080/api/systemadmin/department/rename';
  const SYS_ADMIN_TOKEN =  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTk3MzA1MTIzLCJleHAiOjE1OTc5MDk5MjN9.kkOBRpztFWP6vnqvn45U7ZsyQ3E2QnljMgVCrsszVUR01QyiGjfUavgPaKc5ZJVYTPdb0Z1GY81RB5t9H68FBA'
  
  if (newName != null && deptID != null && deptName == null) {

    useEffect(() => {
      axios.get(`${UNORATER_API_URL_2}` + '/' + `${deptID}` + '/' + `${newName}`, {
        headers: {
          'Authorization': `Bearer ${SYS_ADMIN_TOKEN}` 
        }})
          .then(res => {
              //setData(res.data);
              //setLoad(true);
              if (res.status === 200) {
                alert(res.data.message)
                window.location.reload(false)       
              }
          })
          .catch(err => {
              //setError(err.message);
              //setLoad(true)
              if (deptID != null) {
                alert("Something went wrong: " + err.message)
              }
  
          })
          //window.history.replaceState(null, null, window.location.pathname);
          
    }, []);

  }
}

export default function DepartmentOperations() {
  const classes = useStyles();
  const [createdDeptName, setCreatedDeptName] = useState("");
  const [deletedDeptName, setDeleteDeptName] = useState("");
  const [newDeptID, setNewDeptID] = useState("");
  const [newDeptName, setNewDeptName] = useState("");

  function validateAddDept() {
    return createdDeptName.length > 0;
  }

  function validateDeleteDept(){
    return deletedDeptName.length > 0;
  }

  function validateRenameDept() {
    return newDeptName.length > 0;
  }

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
                value={createdDeptName}
                onChange={e => setCreatedDeptName(e.target.value)}
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
            onClick={createDept()}
            disabled={!validateAddDept()}
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
                value={deletedDeptName}
                onChange={e => setDeleteDeptName(e.target.value)}
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
            onClick={delDept()}
            disabled={!validateDeleteDept()}
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
                value={newDeptID}
                onChange={e => setNewDeptID(e.target.value)}
                autoComplete="lname"
              />
          </Grid>

          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="newName"
                label="New Department Name"
                name="newName"
                value={newDeptName}
                onChange={e => setNewDeptName(e.target.value)}
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
            // href="Confirmation"
            onClick={renameDept()}
            disabled={!validateRenameDept()}
          >
            Rename Department
          </Button>
        </form>    

    </div>

  );
}