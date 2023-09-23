import { ReactNode, useReducer, ChangeEvent } from "react";

const initialState = {
  count: 0,
  text: '',
};

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE
  payload?: string,
}

const reducer = (state: typeof initialState, action: ReducerAction): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 }
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 }
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? '' }
    default:
      throw new Error()
  }
}

type ChildrenType = {
  children: (num: number) => ReactNode
}

const Counter = ({ children }: ChildrenType) => {
  // const [count, setCount] = useState<number>(1);
  const [state, dispatch] = useReducer(reducer, initialState)

  const incremement = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })
  const decremement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value })
  }

  return (
    <>
      <h1>{children(state.count)}</h1>
      <div className="">
        <button onClick={incremement}>+</button>
        <button onClick={decremement}>-</button>
      </div>
      <input type="text" onChange={handleTextInput} />
      <h2>{state.text}</h2>
    </>
  )
}
export default Counter;