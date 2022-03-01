import type { InputControlProps } from './types';
import { InputWrapper } from './style';

const InputControl = ({ children }: InputControlProps) => {
  return <InputWrapper>{children}</InputWrapper>;
};

export default InputControl;
