import classes from './MainCard.module.scss'
import SubCard from './SubCard';
import componentsImg from '../assets/components.png'
import jsx from '../assets/jsx-ui.png'
import config from '../assets/config.png'
import state from '../assets/state-mgmt.png'

const MainCard = ()=>{
    return (
        <div className={classes.card}>
            <h3 className={classes['card__heading']}>Core Concepts</h3>
            {/* 4 ele  */}
            <div className={classes.card__elements}>
                <SubCard imgSrc={componentsImg} heading={'Components'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}></SubCard>
                <SubCard imgSrc={jsx} heading={'Jsx'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}></SubCard>
                <SubCard imgSrc={config} heading={'Config'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}></SubCard>
                <SubCard imgSrc={state} heading={'State'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}></SubCard>
                
            </div>
        </div>
    )
}
export default MainCard;