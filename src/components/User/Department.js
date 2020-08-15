import React, {useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Reviews from './Reviews'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  tableheadstyle: {

    border: '1px black solid',

    backgroundColor: 'white',

    color: 'black',

  },

  tablerowstyle: {

    // backgroundColor: '#ccc',
    border: '1px black solid',

    backgroundColor: 'white',

    color: 'black',

    // border: '1px black solid',

  },

  headstyle: {

    textAlign: 'left',

  },

  content: {

    margin: '6em 0em 1em 20em',

    paddingTop: '1em',

  },

  buttonstyle: {

    backgroundColor: 'gray',

    color: 'white',

    float: 'right',

  },
});

export const Department = props => {
  const classes = useStyles();
  const [selectedDept, setSelectedDept] = useState("");
  const [showReviews, setShowReviews] = useState(false)
  const [deptData, setDeptData] = useState("")

const [departmentData, setData] = useState({departments: [], isFetching: false, isCount: 0});
// const [selectedDepartment, setSelectedDepartment] = useState({selectedDepartment: []});
  const UNORATER_API_URL = 'http://localhost:8080/api'
  const SYS_ADMIN_TOKEN =  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNTk3NDU5ODI4LCJleHAiOjE1OTgwNjQ2Mjh9.eKubtUKcENUqheNUjGaunBxfUOZfvrBO-eKpHPIC_dNSEHc5nA1P3Ko_bnZ5pnD5qiQ94JYK7l6dB7Htqt4ZrQ'

  const selectedDepartment = (row) => {
    setDeptData(row)
    // setShowReviews(true)
    setShowReviews(!showReviews)
    console.log(row)
    departmentData.isCount = departmentData.isCount + 1
    if (departmentData.isCount < 1) return(window.location.reload(true));
  }
  useEffect(() => {
    const fetchUsers = async () => {
        try {
            setData({departments: departmentData.departments, isFetching: true});
            const response = await axios.get(`${UNORATER_API_URL}/user/viewallservices`, {
              headers: {
                'Authorization': `Bearer ${SYS_ADMIN_TOKEN}` 
              }});
            setData({departments: response.data, isFetching: false});
        } catch (e) {
            console.log(e);
            setData({departments: departmentData.departments, isFetching: false});
        }
    };
    fetchUsers();
  }, []);

  if (departmentData.isFetching) return(<h1>LOADING...</h1>);

  return (

    <div>
      <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
  className="addmargin"
>
<Typography 
variant="h4"
style={{margin: "10px" }}
>Select A Service to Review</Typography>


<Table size="small">
        <TableHead className={classes.tableheadstyle}>
          <TableRow className={classes.tablerowstyle}>
            <TableCell><Typography variant="h4" component="h4">Service ID </Typography> </TableCell>
            <TableCell><Typography variant="h4" component="h4">Service Name </Typography></TableCell>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {departmentData.departments.map((row) => (
            <TableRow className={classes.tablerowstyle} key={row.serviceID}>
              <TableCell><Typography variant="h6" component="h6">{row.serviceID}</Typography></TableCell>
              <TableCell><Typography variant="h6" component="h6">{row.serviceName}</Typography></TableCell>
              <TableCell>
<Button
  variant="contained"
  className={classes.buttonstyle}
  onClick={()=> selectedDepartment(row)}
>
  {/* View Service */}
{!showReviews ? <Typography>View Service</Typography> : <CloseIcon />}
{/* View Service */}
</Button>
</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      </ Grid>
      {/* <div className="col-md-6"> */}

{showReviews && (

<Grid
container
direction="column"
justify="center"
alignItems="center"
className="addmargin"
>

  <Reviews

    // appID={applicationData.uuid}

    data={deptData}

    // setActionUpdate={setActionUpdate}

  />
      {/* </div> */}
      </ Grid>
)}
    </div>
    );

  }

export default Department
