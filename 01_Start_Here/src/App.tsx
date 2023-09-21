import { useState } from "react";
import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <Heading title={"Hello, world!"} />
      <Section title={"My Subheading"}>
        <p>My content</p>
      </Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["a", "b", "c"]} render={(item) => <strong className="gold">{item}</strong>} />
    </>

  );
};

export default App;
