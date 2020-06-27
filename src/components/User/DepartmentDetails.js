import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'
import Reviews from './Reviews'

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedClass: []
    }
  }
  

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCustomerDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val)
    }
    // if (!this.props.selectedClass !== prevProps.selectClass) {
    //   !this.state.customerDetails
    // }
  }

  //Function to Load the customerdetails data from json.
  getCustomerDetails(id) {
    axios.get('assets/samplejson/dept' + id + '.json').then(response => {
      this.setState({customerDetails: response})
    })
  };
  // : this.state.customerDetails.data.id

  render() {
    if (!this.state.customerDetails)
      return (<p></p>)
    return (<div className="customerdetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">Services Avaliable for Feedback Under {this.state.customerDetails.data.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          {/* <h4>Classess Avaliable for Feedback Under {this.state.customerDetails.data.name}</h4> */}
          <a onClick={() => this.setState({selectedClass: this.state.customerDetails.data.id })}> {this.state.customerDetails.data.class}</a>
          {/* <Link href = "">Name : {this.state.customerDetails.data.class}</Link> */}
          {/* <p>Phone : {this.state.customerDetails.data.phone}</p>
          <p>City : {this.state.customerDetails.data.city}</p>
          <p>State : {this.state.customerDetails.data.state}</p>
          <p>Country : {this.state.customerDetails.data.country}</p>
          <p>Organization : {this.state.customerDetails.data.organization}</p>
          <p>Job Profile : {this.state.customerDetails.data.jobProfile}</p>
          <p>Additional Info : {this.state.customerDetails.data.additionalInfo}</p> */}
        </Panel.Body>
      </Panel>

      <Reviews val={this.state.selectedClass}/>
    </div>)
  }
}
