import { ReactElement } from "react";

type HeadingProps = { title: string; };

const Heading: React.FC<HeadingProps> = ({ title }: HeadingProps): ReactElement => {
  return (
    <h1>{title}</h1>
  );
};

export default Heading;