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

export default function Services() {

  const classes = useStyles();

  const [servicesData, setData] = useState({services: [], isFetching: false});

  const UNORATER_API_URL = 'http://localhost:8080/api/departmentadmin/services'
  const SYS_ADMIN_TOKEN =  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNTk3NDU5ODI4LCJleHAiOjE1OTgwNjQ2Mjh9.eKubtUKcENUqheNUjGaunBxfUOZfvrBO-eKpHPIC_dNSEHc5nA1P3Ko_bnZ5pnD5qiQ94JYK7l6dB7Htqt4ZrQ'

  useEffect(() => {
    const fetchUsers = async () => {
        try {
            setData({services: servicesData.services, isFetching: true});
            const response = await axios.get(`${UNORATER_API_URL}`, {
              headers: {
                'Authorization': `Bearer ${SYS_ADMIN_TOKEN}` 
              }});
            setData({services: response.data, isFetching: false});
        } catch (e) {
            console.log(e);
            setData({services: servicesData.services, isFetching: false});
        }
    };
    fetchUsers();
  }, []);

  if (servicesData.isFetching) return(<h1>LOADING SERVICES...</h1>);

  return (
    <React.Fragment>
      <Title>Services</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
           <TableCell>Department ID</TableCell>
            <TableCell>Service ID</TableCell>
            <TableCell>Service Name</TableCell>
            <TableCell>Service Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {servicesData.services.map((row) => (
            <TableRow key={row.serviceID}>
              <TableCell>{row.departmentID}</TableCell>
              <TableCell>{row.serviceID}</TableCell>
              <TableCell>{row.serviceName}</TableCell>
              <TableCell>{row.serviceDescription}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Services Avaliable
        </Link>
      </div>
    </React.Fragment>
  );
}