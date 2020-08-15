import React, {useState} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  table: {
  border: "1px white solid",
  marginLeft:"10em",
  padding:"1em",
  },
})

function submitReview(e, serviceID, reviewText, score) {
  e.preventDefault();
 
  const UNORATER_API_URL = 'http://localhost:8080/api/user/me/postreview';
  const SYS_ADMIN_TOKEN =  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTk3MzA1MTIzLCJleHAiOjE1OTc5MDk5MjN9.kkOBRpztFWP6vnqvn45U7ZsyQ3E2QnljMgVCrsszVUR01QyiGjfUavgPaKc5ZJVYTPdb0Z1GY81RB5t9H68FBA'
 
  if (reviewText != null && score != null && serviceID != null) {

    const url = `${UNORATER_API_URL}` + '/' +`${serviceID}` + '/' + `${reviewText}` + '/' + `${score}`;
    // Create our request constructor with all the parameters we need
    var request = new Request(url, {
        method: 'GET',
        headers: new Headers({
          'Authorization': `Bearer ${SYS_ADMIN_TOKEN}` 
        }),  
    });

    fetch(request)
    .then(res => {
      // Handle response we get from the API
      if (res.status === 200) {
        alert("Review posted") 
        window.location.reload(false)      
      }
      if(res.status === 403) {
        alert("A inappropriate word was detected. Please try again.")
        window.location.reload(false)
      }
    })
    .catch(err => {
      alert("Something went wrong: " + err.message)
    })
  }  
}

export const Reviews = props => {
  console.log('props', props)
  const [deptData] = useState({
    serviceID: props.data.serviceID,
    serviceName: props.data.serviceName,
    serviceDescription: props.data.serviceDescription,
    reviews: props.data.reviews,
    aggregateScore: props.data.aggregateScore,
  })
  console.log(deptData)
  console.log('reviewText' , deptData.reviews)
  const [dense] = React.useState(false);
  const [reviewText, setReviewText] = useState("");
  const [score, setScore] = useState("");

  return (
<div>
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
  <Panel.Title componentClass="h3">Reviews for {deptData.serviceName} ({deptData.serviceID})</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        > 
        <Typography variant="h2" component="h2">
             Review Score is {deptData.aggregateScore} / 5
             </Typography>
        </Grid>
          <Divider style={{margin: "40px"}}/>
          <Typography variant="h5" component="h5">
             {deptData.serviceDescription}
             </Typography>
      <Divider style={{margin: "40px"}}/>

      <List dense={dense}>
      {deptData.reviews.map((row) => (
                <ListItem>
                  <PersonIcon />
                  <ListItemText
                    primary={"Review: " + row.reviewText}
                    secondary={"Score: " + row.score + " / 5"}
                  />
                  
                </ListItem>
      ))}
            </List>
          <Divider style={{margin: "40px"}}/>
          <Typography> Wanna add a review?</Typography>
          <form>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="reviewText"
              label="Review Text"
              name="reviewText"
              value={reviewText}
              onChange={e => setReviewText(e.target.value)}
              autoFocus
            />
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="score"
              label="Score"
              name="score"
              value={score}
              onChange={e => setScore(e.target.value)}
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={(e) => submitReview(e, deptData.serviceID, reviewText, score)}
            >
              Submit Review
            </Button>
            </form>
        </Panel.Body>
      </Panel>
    </div>
    );
}
export default Reviews