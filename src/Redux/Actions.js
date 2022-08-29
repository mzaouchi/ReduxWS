import { ADDTEXT, DECREMENT, HANDLESHOW, INCREMENT } from "./ActionTypes"

export const increment=(x)=>{
    return(
        {
            type : INCREMENT,
            payload : x
        }
    )
}

export const decrement=()=>{
    return(
        {
            type : DECREMENT
        }
    )
}

export const addText=(payload)=>{
    return(
        {
            type : ADDTEXT,
            payload
        }
    )
}

export const handleShow=()=>{
    return(
        {
            type : HANDLESHOW
        }
    )
}

