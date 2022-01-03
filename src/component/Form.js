import React, { useState} from 'react'
import { TextField, Checkbox, Button, FormControlLabel, makeStyles } from '@material-ui/core/';
import { Alert } from '@material-ui/lab';
import axios from 'axios';
const serveur = "http://localhost:3000";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width:'38ch',
        },
    },
}));

export default function Form() {
    const [remember, setRemember] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState({email: false, password: false, check: null});
    const classes = useStyles();

    const LoginUser = () => {
        if(!email || !password){
            let error = {email: false, password: false};
            error.email = !email ? true : false;
            error.password = !password ? true : false;
            return setError(error);
        }

        axios.post(`${serveur}/login`, {
            'email': email,
            'password': password,
            'remember': remember,
        })
        .then(function(response){
            if(response.data.success){
                alert(response.data.success)
            }
            else if(response.data.error){
                setError({email: false, password: false, check: response.data.error})
            }
            else{
                setError({email: false, password: false, check: response.data.err})
            }
            
        })
        .catch(function(error){
            console.log(error);
        })
    }

    return (
        <form className={classes.root + " login_form"} noValidate autoComplete='off' onSubmit={() => LoginUser()}>

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

            <Button type="submit" variant="contained" color="primary" disableElevation>
                Login
            </Button>

        </form>
    )
}