import React, { useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core/';
import { Button } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width:'46ch',
        },
    },
}));



export default function Form() {
    const [checked, setChecked] = useState(false)
    const classes = useStyles()

    return (
        <form className={classes.root + " login_form"} noValidate autoComplete='off'>

            <TextField id="outlined-basic" label="Email" variant="outlined" type='text' name='Email' placeholder='Enter your email'/>

            <TextField id="outlined-basic" label="password" variant="outlined" type='password' name='password' placeholder='Enter your password'/>
            
            <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="Remember me"
                labelPlacement="end"
                onClick={() => setChecked(!checked)}
            />

            <Button variant="contained" color="primary" disableElevation>
                Login
            </Button>

        </form>
    )
}