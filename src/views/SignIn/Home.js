import React from 'react'
import styles from './signIn.module.css';
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import Fade from 'react-reveal/Fade';

function SignIn() {
    const [state, setstate] = React.useState('login')
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
            <Fade  top>
                <div className={styles.imgContainer}>
                    <img className={styles.img} src="/icon.png" alt="APP Icon"/>
                    <div>
                        <span style={{"color":"white",marginLeft:'15px'}}>Dear Diary</span>
                    </div>
                </div>
                </Fade >
                <div className={styles.signInContainer}>
                
                    <div className={styles.signInDiv}>
                        <div className={state==='login' && styles.selectedOne} onClick={()=>setstate('login')}>
                            Login
                        </div>
                        <div className={state==='register' && styles.selectedOne} onClick={()=>setstate('register')}>
                            Register
                        </div>
                    </div>
                    {state==='login'?<LoginForm/>:<RegisterForm/>}
                    
                </div>

            </div>
        </div>
    )
}

export default SignIn
