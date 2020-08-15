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
  const [description, setDescription] = useState("");
  const [id, setID] = useState("");
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");


  function validateCreateSev() {
    return name.length > 0 && description.length > 0;
  }

  function validateDelService() {
    return id.length > 0;
  }

  function validateUpdateService() {
    return id.length > 0 && newName.length > 0 && newDescription.length > 0;
  }

  function createService() {
    let search = window.location.search;
    let params1 = new URLSearchParams(search);
    let servName = params1.get('serviceName');
    let servDes = params1.get('serviceDescription')
    let servID = params1.get('serviceID')
  
    const UNORATER_API_URL_1 = 'http://localhost:8080/api/departmentadmin/addservice';
    
    const DEPT_ADMIN_TOKEN =  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNTk3NDQyMTAxLCJleHAiOjE1OTgwNDY5MDF9.2svz_aOCiIQDDggZW4xwV4qk87g-05eSkq1pSfDcO88bMIl7G1Ca_2TJ9dDMA6BMH3N-wHUjHSZ96FoJ-vPJDg'
    
   
    if ( servName != null &&  servDes != null && servID == null) {
  
      useEffect(() => {
        axios.get(`${UNORATER_API_URL_1}` + '/' + `${servName}` + '/' + `${servDes}`, {
          headers: {
            'Authorization': `Bearer ${DEPT_ADMIN_TOKEN}` 
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
                if (servName != null) {
                  alert("Something went wrong: " + err.message)
                }
            })
            window.history.replaceState(null, null, window.location.pathname);
            
      }, []); 
    }
  }

  function deleteService() {
    let search = window.location.search;
    let params1 = new URLSearchParams(search);
    let servName = params1.get('serviceName');
    let servDes = params1.get('serviceDescription')
    let servID = params1.get('serviceID')
  
    const UNORATER_API_URL_1 = 'http://localhost:8080/api/departmentadmin/delete';
    
    const DEPT_ADMIN_TOKEN =  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNTk3NDQyMTAxLCJleHAiOjE1OTgwNDY5MDF9.2svz_aOCiIQDDggZW4xwV4qk87g-05eSkq1pSfDcO88bMIl7G1Ca_2TJ9dDMA6BMH3N-wHUjHSZ96FoJ-vPJDg'
    
   
    if ( servName == null &&  servDes == null && servID != null) {
  
      useEffect(() => {
        axios.get(`${UNORATER_API_URL_1}` + '/' + `${servID}`, {
          headers: {
            'Authorization': `Bearer ${DEPT_ADMIN_TOKEN}` 
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
                if (servID != null) {
                  alert("Something went wrong: " + err.message)
                }
            })
            window.history.replaceState(null, null, window.location.pathname);
            
      }, []); 
    }
  }


  function renameService() {
    let search = window.location.search;
    let params1 = new URLSearchParams(search);
    let servName = params1.get('serviceName');
    let servDes = params1.get('serviceDescription')
    let servID = params1.get('serviceID')
    let nServName = params1.get('newServiceName');
    let newServDes = params1.get('newServiceDescription')
  
    const UNORATER_API_URL_1 = 'http://localhost:8080/api/departmentadmin/update';
    
    const DEPT_ADMIN_TOKEN =  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNTk3NDQyMTAxLCJleHAiOjE1OTgwNDY5MDF9.2svz_aOCiIQDDggZW4xwV4qk87g-05eSkq1pSfDcO88bMIl7G1Ca_2TJ9dDMA6BMH3N-wHUjHSZ96FoJ-vPJDg'
    
   
    if ( servName == null &&  servDes == null && servID != null && nServName != null && newServDes != null) {
  
      useEffect(() => {
        axios.get(`${UNORATER_API_URL_1}` + '/' + `${servID}` + '/' + `${nServName}` + '/' + `${newServDes}`, {
          headers: {
            'Authorization': `Bearer ${DEPT_ADMIN_TOKEN}` 
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
                if (nServName != null) {
                  alert("Something went wrong: " + err.message)
                }
            })
            window.history.replaceState(null, null, window.location.pathname);
            
      }, []); 
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
                name="serviceDescription"
                autoComplete="sDescription"
                value={description}
                onChange={e => setDescription(e.target.value)}
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
            onClick ={createService()}
            disabled={!validateCreateSev()}
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
                value={id}
                onChange={e => setID(e.target.value)}
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
            //href="Confirmation"
            onClick ={deleteService()}
            disabled={!validateDelService()}
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
                value={id}
                onChange={e => setID(e.target.value)}
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="newServiceName"
                label="New Service Name"
                name="newServiceName"
                autoComplete="newServiceName"
                value={newName}
                onChange={e => setNewName(e.target.value)}
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
                name="newServiceDescription"
                autoComplete="sDescription"
                value={newDescription}
                onChange={e => setNewDescription(e.target.value)}
              />
            </Grid>
            <br></br>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!validateUpdateService()}
            // style={{margin: "2px"}}
            //href="Confirmation"
            onClick ={renameService()}
          >
            Update Service
          </Button>
        </form>  
      </div>
  );
}