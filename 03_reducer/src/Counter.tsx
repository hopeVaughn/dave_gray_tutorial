import { ReactNode, useState } from "react";

type ChildrenType = {
  children: (num: number) => ReactNode
}

const Counter = ({ children }: ChildrenType) => {
  const [count, setCount] = useState<number>(1);

  const incremement = () => setCount(prev => prev + 1)
  const decremement = () => setCount(prev => prev - 1)

  return (
    <>
      <h1>{children(count)}</h1>
      <div className="">
        <button onClick={incremement}>+</button>
        <button onClick={decremement}>-</button>
      </div>
    </>
  )
}
export default Counter;