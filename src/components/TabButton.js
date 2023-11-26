import classes from './TabButton.module.scss'
{/* <button onClick={compClickHandler} className={classes.btn}>Components</button> */}
const TabButton = (props)=>{
    return (
        <button onClick={props.onClick} className={classes.btn}>{props.children}</button>
    )
}

export default TabButton;