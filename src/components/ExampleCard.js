import classes from './ExampleCard.module.scss'

const ExampleCard = (props)=>{
    return(
    <div className={classes.exampleCard}>
        {/* <h1>Hello</h1> */}
        <div className={classes['exampleCard__heading']}>{props.heading}</div>
        <p className={classes['exampleCard__text']}>{props.text}</p>
        <div>
            <pre class="line-numbers">
                <code class="language-css" className={classes['exampleCard__obj']}>
                    {props.obj}
                </code>
            </pre>
        </div>
    </div>
    )
    
}
export default ExampleCard;