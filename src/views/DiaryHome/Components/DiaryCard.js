import React,{useState} from 'react'
import styles from './diaryCard.module.css';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';
import LightSpeed from 'react-reveal/LightSpeed';

function DiaryCard({title,subtitle,description}) {

    const [showMore, setstate] = useState(false)

    const getDescription=()=>{
        if(description.length>20 && !showMore){
            let smallDescription=description.substring(0,20);
            return(
                <div>{smallDescription} ...</div>
            )
        }
        else{
            return<div>{description}</div>
        }
    }

    return (
        <div>
        <LightSpeed left>
        <div className={styles.container}>
            <div className={styles.title}>
                {title}
            </div>

            <div className={styles.subtitle}>
                {subtitle}
            </div>

            <div className={styles.description}> 
                {getDescription()} 
            </div>

            {description.length>20 &&
                <div className={styles.showMore}>
                    {showMore?<div onClick={()=>setstate(false)}>SHOW LESS</div> : <div onClick={()=>setstate(true)}>SHOW MORE</div>}
                </div>
            }

            <div style={{textAlign: 'right'}}>
                <IconButton><EditIcon style={{color: '#dddedf'}}/></IconButton>
                <IconButton><DeleteIcon color='error'/></IconButton>
            </div>
        </div>
        </LightSpeed>
        </div>
    )
}

DiaryCard.propTypes = {
    title: PropTypes.string,
    subtitle:PropTypes.string,
    description:PropTypes.string,
    bgColor:PropTypes.string
  };

export default DiaryCard
