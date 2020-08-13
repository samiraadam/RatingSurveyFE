import React, { useEffect, useState } from "react";
import axios from 'axios';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

const UNORATER_API_URL = 'http://localhost:8080/api'
const SYS_ADMIN_TOKEN =  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTk3Mjc3NjAxLCJleHAiOjE1OTc4ODI0MDF9.Wj6i2B-tidZXwsIIPs8ZCP6bDGOqYHKnR5AhbhzhT6e6Qrgu66WdbTUV7PMaBDEdmep5BY3dCVgLRf2dR6rifA'


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '1', 'Seyi', 'oluwaseyi.ola@my.metrostate.edu'),
  createData(1, '2', 'Department1_Admin', 'depart1Admin@gmail.com'),
  createData(2, '3', 'student', 'student@gmail.com'),
  createData(3, '4', 'samira', 'samira@gmail.com'),
  createData(4, '5', 'Bossman', 'Bossman@yahoo.com'),
];


export default function Users() {

  const classes = useStyles();

  const [userData, setData] = useState({users: [], isFetching: false});

  const UNORATER_API_URL = 'http://localhost:8080/api'
  const SYS_ADMIN_TOKEN =  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTk3Mjc3NjAxLCJleHAiOjE1OTc4ODI0MDF9.Wj6i2B-tidZXwsIIPs8ZCP6bDGOqYHKnR5AhbhzhT6e6Qrgu66WdbTUV7PMaBDEdmep5BY3dCVgLRf2dR6rifA'

  useEffect(() => {
    const fetchUsers = async () => {
        try {
            setData({users: userData.users, isFetching: true});
            const response = await axios.get(`${UNORATER_API_URL}/systemadmin/users`, {
              headers: {
                'Authorization': `Bearer ${SYS_ADMIN_TOKEN}` 
              }});
            setData({users: response.data, isFetching: false});
        } catch (e) {
            console.log(e);
            setData({users: userData.users, isFetching: false});
        }
    };
    fetchUsers();
  }, []);

  if (userData.isFetching) return(<h1>LOADING...</h1>);


  return (
    <React.Fragment>
      <Title>Users</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>UserID</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            {/* <TableCell>Admin?</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
        {userData.users.map((row) => (
            <TableRow key={row.userID}>
            <TableCell>{row.userID}</TableCell>
            <TableCell>{row.userName}</TableCell>
            <TableCell>{row.email}</TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Users
        </Link>
      </div>
    </React.Fragment>
  );
}