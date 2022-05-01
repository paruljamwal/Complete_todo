import { addcount } from '../Redux/counter/action';
import {useDispatch , useSelector} from 'react-redux';//middleman itknows whn the value changes 
//usedispatch is a wrapper around store.dispatch its going through react
export const Counter = () => {
    //hooks
const dispatch = useDispatch()
const counter=useSelector((store)=>store.counter.counter)  
//usecontext
  //selecting value from entire store


    return (
        <div>
            <h3>Counter:{counter}</h3>
            <button onClick={() => {
                dispatch(addcount(1));
            }}>Add 1</button>
        </div>
    )
}