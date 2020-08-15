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

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Users() {

  const classes = useStyles();

  const [userData, setData] = useState({users: [], isFetching: false});

  const UNORATER_API_URL = 'http://localhost:8080/api'
  const SYS_ADMIN_TOKEN =  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNTk3NDU5ODI4LCJleHAiOjE1OTgwNjQ2Mjh9.eKubtUKcENUqheNUjGaunBxfUOZfvrBO-eKpHPIC_dNSEHc5nA1P3Ko_bnZ5pnD5qiQ94JYK7l6dB7Htqt4ZrQ'

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

  if (userData.isFetching) return(<h1>LOADING USERS...</h1>);


  return (
    <React.Fragment>
      <Title>Users</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>UserID</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Roles</TableCell>
            {/* <TableCell>Admin?</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
        {userData.users.map((row) => (
            <TableRow key={row.userID}>
            <TableCell>{row.userID}</TableCell>
            <TableCell>{row.userName}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.rolesString}</TableCell>
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