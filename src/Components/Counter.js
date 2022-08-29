import { useSelector,useDispatch } from "react-redux"
import { addText, decrement, increment } from "../Redux/Actions"
const Counter =()=>{
    const count = useSelector(state=> state.count)
    const textP = useSelector(state=> state.textP)
    const dispatch = useDispatch()
    return(
        <div>
            <button onClick={()=> dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={()=>dispatch(increment(5))}>+</button>
            <br/>
            <br/>
            <input type='text' onChange={(e)=> dispatch(addText(e.target.value))}/>
            <h3>{textP}</h3>
        </div>
    )
}

export default Counter