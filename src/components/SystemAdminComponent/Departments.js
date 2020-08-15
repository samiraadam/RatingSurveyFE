
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

export default function Departments() {
  const classes = useStyles();

  const [departmentData, setData] = useState({departments: [], isFetching: false});

  const UNORATER_API_URL = 'http://localhost:8080/api'
  const SYS_ADMIN_TOKEN =  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNTk3NDU5ODI4LCJleHAiOjE1OTgwNjQ2Mjh9.eKubtUKcENUqheNUjGaunBxfUOZfvrBO-eKpHPIC_dNSEHc5nA1P3Ko_bnZ5pnD5qiQ94JYK7l6dB7Htqt4ZrQ'

  useEffect(() => {
    const fetchUsers = async () => {
        try {
            setData({departments: departmentData.departments, isFetching: true});
            const response = await axios.get(`${UNORATER_API_URL}/systemadmin/departments`, {
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
    <React.Fragment>
      <Title>Departments</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>DepartmentID</TableCell>
            <TableCell>Department Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {departmentData.departments.map((row) => (
            <TableRow key={row.departmentID}>
              <TableCell>{row.departmentID}</TableCell>
              <TableCell>{row.departmentName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Departments
        </Link>
      </div>
    </React.Fragment>
  );
}