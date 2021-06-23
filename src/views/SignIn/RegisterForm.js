import React from 'react'
import styles from './signIn.module.css';
import TextField from '@material-ui/core/TextField';
import {withStyles, makeStyles} from '@material-ui/core';
import Zoom from 'react-reveal/Fade';

const useStyles = makeStyles(() => ({
    labelRoot: {
        'fontFamily': 'Inter',
        'fontSize': '16px',
    },
    root: {
        backgroundColor: '#FDFDFD !important',
        borderRadius: '8px',
        fontSize: '16px',
        borderColor: 'red',
    },
    underline: {
        '&&&:before': {
            borderBottom: '1px solid rgba(0, 0, 0, 0)',
        },
        '&&&hover': {
            borderBottom: '0px solid rgba(0, 0, 0, 1)',
        },
        '&&:after': {
            borderBottom: '0px solid rgba(0, 0, 0, 1)',
        },
    },
}));

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#4B76D1',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#4B76D1',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#BBD7FB',
                borderRadius: '8px',
            },
            '&:hover fieldset': {
                borderColor: '#4B76D1',
                borderRadius: '8px',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#4B76D1',
                borderRadius: '8px',
            },
        },
    },
})(TextField);

function RegisterForm() {
    const classes = useStyles();
    return (
        <div>
<Zoom>
                    <div  className={styles.textContainer}>
                    <div style={{width:'100%'}}>
                            <CssTextField
                            style={{width:'100%'}}
                            // error={error}
                            id="outlined-error-helper-text"
                            required
                            label="Your Name"
                            // helperText={error}
                            variant="filled"
                            placeholder="Your Name"
                            InputLabelProps={{
                                classes: {
                                    root: classes.labelRoot,
                                },
                            }}
                            InputProps={{
                                classes: {
                                    underline: classes.underline,
                                    root: classes.root,
                                },
                            }}
                            // onBlur={onBlue}
                            // value={nickName}
                            // onChange={e=>{setNickName(e.target.value);onBlue()}}
                            />
                        </div>
                        <div style={{width:'100%'}}>
                            <CssTextField
                            style={{width:'100%'}}
                            // error={error}
                            id="outlined-error-helper-text"
                            required
                            label="Email"
                            // helperText={error}
                            variant="filled"
                            placeholder="Email"
                            inputProps={{ style: { WebkitBoxShadow: "0 0 0 1000px white inset" }}}
                            InputLabelProps={{
                                classes: {
                                    root: classes.labelRoot,
                                },
                            }}
                            InputProps={{
                                classes: {
                                    underline: classes.underline,
                                    root: classes.root,
                                },
                            }}
                            // onBlur={onBlue}
                            // value={nickName}
                            // onChange={e=>{setNickName(e.target.value);onBlue()}}
                            />
                        </div>
                        <div style={{width:'100%'}}>
                            <CssTextField
                            fullWidth
                            // error={error}
                            id="outlined-error-helper-text"
                            required
                            label="Password"
                            type='password'
                            // helperText={error}
                            variant="filled"
                            placeholder="Password"
                            inputProps={{ style: { WebkitBoxShadow: "0 0 0 1000px white inset" }}}
                            InputLabelProps={{
                                classes: {
                                    root: classes.labelRoot,
                                },
                            }}
                            InputProps={{
                                classes: {
                                    underline: classes.underline,
                                    root: classes.root,
                                },
                            }}
                            // onBlur={onBlue}
                            // value={nickName}
                            // onChange={e=>{setNickName(e.target.value);onBlue()}}
                            />
                        </div>
                    </div>
                        
                    <div style={{textAlign:"center"}}>
                        <div className={styles.btn1}>Register</div>
                    </div>
                    </Zoom>
                    </div>
    )
}

export default RegisterForm
