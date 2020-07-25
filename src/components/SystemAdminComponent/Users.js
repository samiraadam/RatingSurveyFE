import React, { useEffect } from "react";
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

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



function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  // const data = useState
//   const token ='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNTk1Njk3NTM5LCJleHAiOjE1OTYzMDIzMzl9.as3RN7gA4Vm-3ygmWhfgp-r_xHtlwMQoFyuatMWLRQgyv7zIXhhr_fvTBiTTs-oOAp9RVekWCJtxWWNXqFZN5Q';
//   useEffect(() => {
//   // GET request using fetch inside useEffect React hook
//   fetch('localhost:8080/api/systemadmin/users' + token)
//   .then(function (response) {
//     if (response.status === 200 && response != null) {
//       var data = response.data;
//       console.log(data)
//       return data
//     } else {
//       console.log('problem');
//     }
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//       // .then(response => response.json())
//       // .then(data => this.setState({ totalReactPackages: data.total }));

// // empty dependency array means this effect will only run once (like componentDidMount in classes)
// }, []); 
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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
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