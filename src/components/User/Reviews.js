import React, {useState, useEffect} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
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


const submitReview= () => {
  console.log('text and score',reviewText, score)
  let search = window.location.search;
  let params1 = new URLSearchParams(search);
  let reviewText = params1.get('Great Class');
  let score = params1.get('4.5')
  let serviceID = params1.get(1)



  const UNORATER_API_URL = 'http://localhost:8080/api/user/me/postreview';
  const SYS_ADMIN_TOKEN =  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNTk3NDU5ODI4LCJleHAiOjE1OTgwNjQ2Mjh9.eKubtUKcENUqheNUjGaunBxfUOZfvrBO-eKpHPIC_dNSEHc5nA1P3Ko_bnZ5pnD5qiQ94JYK7l6dB7Htqt4ZrQ'
  
  if (reviewText != null && score != null) {

    useEffect(() => {
      axios.get(`${UNORATER_API_URL}` + '/' +`${serviceID}` + `${reviewText}` + '/' + `${score}`, {
        headers: {
          'Authorization': `Bearer ${SYS_ADMIN_TOKEN}` 
        }})
          .then(res => {
              if (res.status === 200) {
                alert(res.data.message)
                window.location.reload(false)
                alert("Call passed")       
              }
          })
          .catch(err => {
              if (serviceID != null) {
                alert("Something went wrong: " + err.message)
              }
  
          })
          
    }, []);

  }
}

export const Reviews = props => {
  const classes = useStyles()
  console.log('props', props)
  const [deptData, setDeptData] = useState({
    serviceID: props.data.serviceID,
    serviceName: props.data.serviceName,
    serviceDescription: props.data.serviceDescription,
    reviews: props.data.reviews,
    aggregateScore: props.data.aggregateScore,
  })
console.log(deptData)
console.log('reviewText' , deptData.reviews)
const [dense, setDense] = React.useState(false);
const [reviewText, setReviewText] = useState("");
const [score, setScore] = useState("");
function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

// if (deptData.isFetching) return(<h1>LOADING...</h1>);


  return (
<div>
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
  <Panel.Title componentClass="h3">Reviews for {deptData.serviceName}</Panel.Title>
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
              // className={classes.submit}
              href="Home"
              onClick={submitReview()}
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