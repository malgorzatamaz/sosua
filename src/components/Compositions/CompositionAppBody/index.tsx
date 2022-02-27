import type { AppBodyProps } from "./types";
import { AppBodyWraper, Header } from "./style";

const CompositionAppBody = ({ children }: AppBodyProps) => {
  return <AppBodyWraper>{children}</AppBodyWraper>;
};

export default CompositionAppBody;
