import React from 'react'
import styles from './header.module.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Popover from '@material-ui/core/Popover';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
  }));

function Header() {
    const classes = useStyles();
    let history = useHistory();
    const logOut = () => {
      history.push("/login")
    }
    return (
       <>
       <div style={{width: '100%'}}>
         <h1 style={{"color":"white", paddingLeft: 40}}>
            Hello User !
          </h1>
        </div>

        <div className={styles.searchComponent}>
            <div>
                <input className={styles.searchInput}  placeholder="Search"/>
            </div>
           <div className={styles.iconStyle} style={{position:"absolute"}}>
                <SearchIcon fontSize="large"/>
           </div>
        </div>

        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
            <div>
                <div className={styles.avatarDiv}> 
                  <Avatar {...bindTrigger(popupState)} className={classes.large} src="/broken-image.jpg" style={{background:"#ff5722",cursor:"pointer"}}>K</Avatar>
                </div>

              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <div style={{width:"200px",padding:"30px", display: 'flex', justifyContent: 'center'}}>
                    <div onClick={logOut} style={{background: '#039be5', borderRadius: 10, color: 'white', padding:10, cursor: 'pointer'}}>
                      Logout
                    </div>
                </div>
                
              </Popover>
              
            </div>
          )}
        </PopupState>


     </>
        
        
    )
}

export default Header
