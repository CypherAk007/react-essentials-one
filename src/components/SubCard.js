import classes from './SubCard.module.scss'

const SubCard = (props)=>{
    return (
        <div className={classes.subCard}>
            <img src={props.imgSrc} alt='img' className={classes['subCard__img']}></img>
            <h2 className={classes['subCard__heading']}>{props.heading}</h2>
            <p className={classes['subCard__text']}>{props.text}</p>
        </div>
    )
}

export default SubCard;