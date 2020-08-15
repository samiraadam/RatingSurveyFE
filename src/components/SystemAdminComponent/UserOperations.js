import React, { useEffect, useState } from "react";
import axios from 'axios';
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

function grantRoleToUser() {
    
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let userID = params.get('userID');
  let roleName = params.get('roleName');
  let deptNum = params.get('deptNum')

  const UNORATER_API_URL = 'http://localhost:8080/api';

  const SYS_ADMIN_TOKEN =  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTk3MzA1MTIzLCJleHAiOjE1OTc5MDk5MjN9.kkOBRpztFWP6vnqvn45U7ZsyQ3E2QnljMgVCrsszVUR01QyiGjfUavgPaKc5ZJVYTPdb0Z1GY81RB5t9H68FBA'
  
  useEffect(() => {

    if (deptNum == null) {
      axios.get(`${UNORATER_API_URL}` + '/' + `${roleName}` + '/' + `${userID}`, {
        headers: {
          'Authorization': `Bearer ${SYS_ADMIN_TOKEN}` 
        }})
          .then(res => {
              if (res.status === 200) {
                window.location.reload(false)            
                alert(res.data.message)
              }
          })
          .catch(err => {             
              if (roleName != null && userID != null) {
                alert("Something went wrong: " + err.message)
              }
  
          })
          window.history.replaceState(null, null, window.location.pathname);
    }else {
      axios.get(`${UNORATER_API_URL}` + '/' + `${roleName}` + '/' + `${userID}` + '/' + `${deptNum}`, {
        headers: {
          'Authorization': `Bearer ${SYS_ADMIN_TOKEN}` 
        }})
          .then(res => {
              if (res.status === 200) {
                window.location.reload(false)            
                alert(res.data.message)
              }
          })
          .catch(err => {
              //setError(err.message);  
              if (roleName != null && userID != null) {
                alert("Something went wrong: " + err.message)
              }
  
          })
          window.history.replaceState(null, null, window.location.pathname);
    }  
  }, []);
}


function deleteAUser() {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let userID = params.get('userID');
  let roleName = params.get('roleName')

  const UNORATER_API_URL = 'http://localhost:8080/api/systemadmin/user/delete';

  const SYS_ADMIN_TOKEN =  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTk3MzA1MTIzLCJleHAiOjE1OTc5MDk5MjN9.kkOBRpztFWP6vnqvn45U7ZsyQ3E2QnljMgVCrsszVUR01QyiGjfUavgPaKc5ZJVYTPdb0Z1GY81RB5t9H68FBA'
  

  if (userID != null && roleName == null) {

    useEffect(() => {
      axios.get(`${UNORATER_API_URL}` + '/' + `${userID}`, {
        headers: {
          'Authorization': `Bearer ${SYS_ADMIN_TOKEN}` 
        }})
          .then(res => {
          
              if (res.status === 200) {
                //window.location.reload(false)
                alert(res.data.message)         
              }
          })
          .catch(err => {
              //setError(err.message);  
              if (userID != null) {
                alert("Something went wrong: " + err.message)
              }
  
          })
          window.history.replaceState(null, null, window.location.pathname);
          
    }, []);
    
  } 
}


function revokeRoleFromUser() {

  let search = window.location.search;
  let params = new URLSearchParams(search);
  let userID = params.get('userID');
  let roleName = params.get('roleName');

  const UNORATER_API_URL = 'http://localhost:8080/api';

  const SYS_ADMIN_TOKEN =  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTk3MzA1MTIzLCJleHAiOjE1OTc5MDk5MjN9.kkOBRpztFWP6vnqvn45U7ZsyQ3E2QnljMgVCrsszVUR01QyiGjfUavgPaKc5ZJVYTPdb0Z1GY81RB5t9H68FBA'
  
  if (roleName === 'removesysadminrole' || roleName === 'removedepadminrole') {
    useEffect(() => {
      axios.get(`${UNORATER_API_URL}` + '/' + `${roleName}` + '/' + `${userID}`, {
        headers: {
          'Authorization': `Bearer ${SYS_ADMIN_TOKEN}` 
        }})
          .then(res => {
              if (res.status === 200) {
              }
          })
          .catch(err => {
              if (roleName != null && userID != null) {
              }
  
          })
          window.history.replaceState(null, null, window.location.pathname);
    }, []);
  }
}

export default function UserOperations() {
  const classes = useStyles();

  const [grantRoleID, setGrantRoleID] = useState("");
  const [grantRoleName, setGrantRoleName] = useState("");
  const [revokeRoleID, setRevokeRoleID] = useState("");
  const [revokeRoleName, setRevokeRoleName] = useState("");
  const [deleteUser, setDeleteUserName] = useState("");
  const [grantDeptNum, setGrantDeptNum] = useState("");


  
  function validateGrantRole() {
    return grantRoleID.length > 0 && grantRoleName.length > 0;
  }

  function validateRevokeRole() {
    return revokeRoleID.length > 0 && revokeRoleName.length > 0;
  }

  function validatedeleteUser() {
    return deleteUser.length > 0;
  }

  function checkDeptAdmin() {
    return grantRoleName === 'grantdepadminrole';
  }

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
                value={grantRoleID}
                onChange={e => setGrantRoleID(e.target.value)}
                autoComplete="userID"
              />
            </Grid>
            <Grid item xs={12}>
            <br></br>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="deptNum"
                label="Department Number"
                name="deptNum"
                value={grantDeptNum}
                onChange={e => setGrantDeptNum(e.target.value)}
                autoComplete="deptNum"
                disabled={!checkDeptAdmin()}
              />
            </Grid>
            <Grid item xs={12}>
                <br></br>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Choose Role Name</FormLabel>
                    <RadioGroup aria-label="roleName" name="roleName" selectedValue={grantRoleName} onChange={e => setGrantRoleName(e.target.value)}>
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
            onClick={grantRoleToUser(this)}
            disabled= {!validateGrantRole()}
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
                value={revokeRoleID}
                onChange={e => setRevokeRoleID(e.target.value)}
                autoComplete="userID"
              />
            </Grid>
            <Grid item xs={12}>
                <br></br>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Choose Role Name</FormLabel>
                    <RadioGroup aria-label="roleName" name="roleName" selectedValue={revokeRoleID} onChange={e => setRevokeRoleName(e.target.value)}>
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
            //href="Confirmation"
            onClick={revokeRoleFromUser(this)}
            disabled= {!validateRevokeRole()}
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
                value={deleteUser}
                onChange={e => setDeleteUserName(e.target.value)}
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
            disabled={!validatedeleteUser()}
            //href="Confirmation"
            onClick={deleteAUser()}
          >
            Delete User
          </Button>
        </form>  
      </div>
  );
}