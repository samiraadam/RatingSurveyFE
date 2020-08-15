import React, { useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function DepartmentAdmin() {
    return (
      <Typography variant="body2" color="textPrimary" align="center">
        <Link 
        color="inherit" 
        href="DepartmentAdmin"
        underline ="hover"
        >
          Department Admin Sign in
        </Link>{''}
      </Typography>
    );
}

function UserSignin() {
  return (
    <Typography variant="body2" color="textPrimary" align="center">
      <Link 
      color="inherit" 
      href="Login"
      underline ="hover"
      >
        User Sign in
      </Link>{''}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function verifyEmailPassword(e, userNameorEmail, password) {
  e.preventDefault();
 
  const UNORATER_API_URL = 'http://localhost:8080/api/auth/adminsignin';
  //const SYS_ADMIN_TOKEN =  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTk3MzA1MTIzLCJleHAiOjE1OTc5MDk5MjN9.kkOBRpztFWP6vnqvn45U7ZsyQ3E2QnljMgVCrsszVUR01QyiGjfUavgPaKc5ZJVYTPdb0Z1GY81RB5t9H68FBA'
 
  if (userNameorEmail != null && password != null) {

    const url = `${UNORATER_API_URL}` + '/' +`${userNameorEmail}` + '/' + `${password}`;
    // Create our request constructor with all the parameters we need
    var request = new Request(url, {
        method: 'GET',  
    });

    fetch(request)
    .then(res => {
      // Handle response we get from the API
      if (res.status === 200) {
        alert("Login in Successful")
        window.location.href="/SystemAdminDashboard"
        window.history.replaceState(null, null, window.location.pathname);
      }else{
        alert("Incorrect Cred: Please Try Again");
      }
    })
  }  
}

export default function SignInSide() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            System Admin Sign In
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={!validateForm()}
              onClick={(e) => verifyEmailPassword(e, email, password)}
            >
              Sign In
            </Button>
          
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="baseline">
              
              <Box mt={5}>
                <Button>
                  <UserSignin />
                </Button>
              </Box>
              
              <Box mt={5}>
                <Button>
                <DepartmentAdmin />
                </Button>
              </Box>
              </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}