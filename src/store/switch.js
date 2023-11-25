import {createSlice} from "@reduxjs/toolkit"

const initialSwitchState = {heading:'',text:'',object:``}

const switchSlice = createSlice({
    name:'switcher',
    initialState:initialSwitchState,
    reducers:{
        changeHeading(state,action){
            state.heading = action.payload
        },
        changeText(state,action){
            state.text = action.payload
        },
        changeObject(state,action){
            state.object = action.payload
        }

    }
})

export const switchActions = switchSlice.actions
export default switchSlice.reducer;