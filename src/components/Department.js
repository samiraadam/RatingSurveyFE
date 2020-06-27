import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DepartmentDetails from './DepartmentDetails'
import axios from 'axios'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default class Customers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedDepartment: 1
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getDepartmentData();
  }

  //Function to get the Customer Data from json
  getDepartmentData() {
    axios.get('assets/samplejson/Departments.json').then(response => {
      this.setState({departmentList: response})
    })
  };

  render() {
    if (!this.state.departmentList)
      return (<p>Loading data</p>)
    return (<div className="addmargin">
      {/* <div className="col-md-3"> */}
      <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
  className="addmargin"
>
    <FormControl>
      <Select
      variant='outlined'
      // autoWidth ='true'
      style={{ width: 300 }}
      >
        {
          this.state.departmentList.data.map(department => 
          // <MenuItem bsStyle="info" key={department.name} className="centeralign">

              <MenuItem style={{ width: 300 }} onClick={() => this.setState({selectedDepartment: department.id})}>

              {department.name}

              </MenuItem>
          )
        }
        </Select>
        </FormControl>
        {/* <Autocomplete
      id="combo-box-demo"
      options={this.state.departmentList.data}
      onClick={() => this.setState({selectedDepartment: department.id})}
      getOptionLabel={(option) => option.id}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    /> */}
      {/* </div> */}
      </ Grid>
      {/* <div className="col-md-6"> */}
      <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
  className="addmargin"
>
        <DepartmentDetails val={this.state.selectedDepartment}/>
      {/* </div> */}
      </ Grid>
    </div>)
  }

}
