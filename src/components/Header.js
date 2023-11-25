import logo from '../assets/react-core-concepts.png'
import classes from './Header.module.scss'
const Header =()=>{
    return(
        // logo - heading - text 
        <div className={classes.header}>
            <div className={classes['header__logo-box']}>
                <img src={logo} className={classes['header__logo']}></img>
            </div>
            <h1 className={classes['header__heading']}>React Essentials</h1>
            <p className={classes['header__text']}>4 Fundamental concepts every react developer Must understand!!</p>
        
        </div>
    )
}

export default Header;