import { useId } from "react";

export const TestReact18 = () => {
  const id = useId();

  return <div id={id}>React 18</div>;
};
