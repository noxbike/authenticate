import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { TextField, Checkbox, Button, FormControlLabel, makeStyles } from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../feature/user/logUser'
import { Alert } from '@material-ui/lab';
import axios from 'axios';
const serveur = "http://localhost:3001/api";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1.2),
            width:'38ch',
        },
    },
}));

export default function SignIn() {
    const [remember, setRemember] = useState(false);
    const [email, setEmail]       = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError]       = useState({email: false, password: false});
    const classes                 = useStyles();
    const user = useSelector(state => state.user.value)
    const dispatch = useDispatch()
    axios.defaults.withCredentials = true;
    
    const LoginUser = (e) => {
        e.preventDefault();

        if(!email || !password){
            return setError({
                email: !email ? true : false,
                password: !password ? true : false
            })
        }

        axios.post(`${serveur}/login`, {
            email,
            password,
            remember
        })
        .then( res => {
            dispatch(login(res.data.msg));
        })
        .catch( err => {
            setError({email: false, password: false, check: "Email or Password incorrect !"})
        })
    }

    if(user) {
        return (
            <Navigate to='/'/>
        )
    }
    else{
        return (
            <form className={classes.root + " login_form"} noValidate autoComplete='off' onSubmit={(e) => LoginUser(e)}>

                <div>
                    <img src='./image/compagnie_logo.png' alt='logo_compagnie' width={200}/>
                </div>

                {error.check && <Alert variant="outlined" severity="warning">
                    {error.check}
                </Alert>}

                <TextField 
                    error= {error.email ? true : false}
                    helperText={error.email ? "Please enter your email." : null}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    type='text' 
                    name='Email'
                    placeholder='Enter your email'
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextField 
                    error={error.password ? true : false}
                    helperText={error.password ? "Please enter your password." : null}
                    id="outlined-basic"
                    label="password"
                    variant="outlined"
                    type='password'
                    name='password'
                    placeholder='Enter your password'
                    onChange={(e) => setPassword(e.target.value)}
                />

                <FormControlLabel
                    value="end"
                    control={<Checkbox color="primary" />}
                    label="Remember me"
                    labelPlacement="end"
                    onClick={() => setRemember(!remember)}
                />

                <Button 
                    type="submit"
                    variant="contained"
                    color="primary"
                    disableElevation
                >
                    Login
                </Button>
                <div className='login_link'>
                    <Link to="/ForgotPassword"><small>Forgot password</small></Link>
                    <Link to='/SignUp'><small>Don't have an account? Sign Up</small></Link>
                </div>
            </form>
        )
    }
}