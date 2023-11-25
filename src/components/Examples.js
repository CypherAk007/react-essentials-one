import { useState } from "react"
import ExampleCard from "./ExampleCard"
import classes from './Examples.module.scss'
const compObj = ` <div>
    <h1>Hello World</h1>
    <p>Welcome!!</p>
 </div>`

const  jsxObj = ` <div>
 <h1> jsxWorld</h1>
 <p>Welcome  jsx!!</p>
</div>`
const propsObj = ` <div>
    <h1>Props World</h1>
    <p>Welcome Props!!</p>
 </div>`
 const stateObj = ` <div>
    <h1>State World</h1>
    <p>Welcome State!!</p>
 </div>`
const Examples = () =>{
    const [heading,setHeading] = useState('')
    const [text,setText] = useState('')
    const [object,setObject] = useState(``)

    const compClickHandler = ()=>{
        setHeading('Components')
        setText('ComponentText')
        setObject(compObj)
    }
    const jsxClickHandler = ()=>{
        setHeading('JSX')
        setText('Jsx Text')
        setObject(jsxObj)
    }
    const prpClickHandler = ()=>{
        setHeading('Props')
        setText('Props Text')
        setObject(propsObj)
    }
    const stateClickHandler = ()=>{
        setHeading('State')
        setText('State Text')
        setObject(stateObj)
    }
    // switch(){

    // }
    return (
        <div className={classes.examples}>
            <div className={classes['examples__textButton']}>
                <h1 className={classes['examples__heading']}>Examples</h1>
                <div className={classes.btnBox}>
                    <button onClick={compClickHandler} className={classes.btn}>Components</button>
                    <button onClick={jsxClickHandler} className={classes.btn}>Jsx</button>
                    <button onClick={prpClickHandler} className={classes.btn}>Props</button>
                    <button onClick={stateClickHandler} className={classes.btn}>State</button>
                </div>
            </div>
            
            <ExampleCard heading={heading} text={text} obj={object}></ExampleCard>

        </div>

    )
}
export default Examples;