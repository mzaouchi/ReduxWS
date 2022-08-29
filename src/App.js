import './App.css';
import Counter from './Components/Counter';
import {useSelector,useDispatch} from 'react-redux'
import { handleShow } from './Redux/Actions';

function App() {
  const show = useSelector(state => state.show)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>WS Redux</h1>
      <button onClick={()=> dispatch(handleShow())}>Show</button>
      {
        show && <Counter/>
      }
    
    </div>
  );
}

export default App;
