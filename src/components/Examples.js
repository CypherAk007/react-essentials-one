import { useState } from "react"
import ExampleCard from "./ExampleCard"
import classes from './Examples.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import { switchActions } from "../store/switch"
import TabButton from "./TabButton"
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
const EXAMPLES = {
    component:{
        heading:'Components',
        text:'Components TEXT',
        obj:compObj,
    },
    jsx:{
        heading:'JSX',
        text:'Jsx TEXT',
        obj:jsxObj,
    },
    props:{
        heading:'PROPS',
        text:'Props Text',
        obj:propsObj,
    },
    state:{
        heading:'STATE',
        text:'State TEXT',
        obj:stateObj,
    }
}

const Examples = () =>{
    // const [heading,setHeading] = useState('Try somthing')
    // const [text,setText] = useState('laojmsdfjnaosjf p jnsdfpansp   ')
    // const [object,setObject] = useState(`<div>aodjsfoj</div>`)

    const dispatch = useDispatch()
    const heading = useSelector(state=> state.switch.heading)
    const text = useSelector(state=> state.switch.text)
    const object= useSelector(state=> state.switch.object)

    const onClickHandler=(selectedElement)=>{
        dispatch(switchActions.changeHeading(EXAMPLES[selectedElement].heading))
        dispatch(switchActions.changeText(EXAMPLES[selectedElement].text))
        dispatch(switchActions.changeObject(EXAMPLES[selectedElement].obj))
    }
    
    return (
        <div className={classes.examples}>
            <div className={classes['examples__textButton']}>
                <h1 className={classes['examples__heading']}>Examples</h1>
                <div className={classes.btnBox}>
                    {/* <TabButton onClick={compClickHandler}>Components</TabButton> */}
                    <TabButton onClick={()=>onClickHandler('component')}>Components</TabButton>
                    <TabButton onClick={()=>onClickHandler('jsx')}>JSX</TabButton>
                    <TabButton onClick={()=>onClickHandler('props')}>Props</TabButton>
                    <TabButton onClick={()=>onClickHandler('state')}>State</TabButton>
                    
                </div>
            </div>
            
            <ExampleCard heading={heading} text={text} obj={object}></ExampleCard>
            {/* <ExampleCard heading={heading} text={text} obj={object}></ExampleCard> */}

        </div>

    )
}
export default Examples;