
import React from 'react';
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
  createData(0, '1', 'Bookstore', 'Where Students are able to get textbooks and supplies'),
  createData(1, '2', 'Cafe', 'Place to grab food and drinks'),
  createData(2, '3', 'Gateway', 'Able to get assitance with financial aid'),
  createData(3, '4', 'Admissions', 'The Admissions Office helps with new and transferring students'),
  createData(4, '5', 'Libarary', 'Where students can access research materials'),
  // createData(4, '5', 'Bruce Springsteen', 'No'),
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
  return (
    <React.Fragment>
      <Title>Services</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Service ID</TableCell>
            <TableCell>Service Name</TableCell>
            <TableCell>Service Description</TableCell>
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
          See more Services Avaliable
        </Link>
      </div>
    </React.Fragment>
  );
}