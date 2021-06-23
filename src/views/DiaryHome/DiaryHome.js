import React,{useState} from 'react'
import DiaryCard from './Components/DiaryCard';
import AddNew from './Components/AddNew';
import styles from './diaryHome.module.css';
import PropTypes from 'prop-types';
import Header from './Components/Header';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function DiaryHome() {

    const [cards, setCards] = useState([{title: '123',subtitle: '123',description: 'first cafds fds afds afds afd saf dsa fds afd saf dsa fds af dsa fds afds a rd'},{title: '123',subtitle: '123',description: 'first card'},{title: '123',subtitle: '123',description: 'first card'},{title: '123',subtitle: '123',description: 'first card'},{title: '123',subtitle: 's',description: 'first card'}])
    const [addNewDialog, setAddNewDialog] = useState(false)
    return (
        <div className={styles.container}>

            <div className={styles.headerDiv}>
                <Header/>
            </div>

            <div>
                <div className={styles.cardContainer}>
                    <Grid justify="center" container spacing={0}>
                    {cards.map((card,index)=>{
                        return(
                            
                            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>        
                                    <DiaryCard  title={card.title} subtitle={card.subtitle} description={card.description} bgColor="gray"/>
                            </Grid>
                            
                        )
                    })}
                    </Grid>
                </div>
            </div>
            <div style={{position: 'fixed', right: '60px', bottom: '40px'}}>
                <AddCircleIcon onClick={()=>setAddNewDialog(true)} className={styles.addIcon} style={{color: '#FFF', cursor: 'pointer'}}/>
            </div>
            <AddNew open={addNewDialog} setOpen={setAddNewDialog}/>
        </div>
    )
}

DiaryHome.propTypes = {
    cards:PropTypes.array,
    addCard:PropTypes.func
};

export default DiaryHome;