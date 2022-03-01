import type { InputProps } from './types';
import { InputWraper, Label, TextInput } from './style';
import React, { useState } from 'react';

const Input = ({ placeholder, onChange, onBlur, value, error }: InputProps) => {
  const [hideLabel, setHideLabel] = useState(true);

  const hendleOnBlur = (e: any) => {
    e.target.placeholder = placeholder;
    if (value === '') {
      setHideLabel(true);
    }
  };
  const hendleOnFocus = (e: any) => {
    e.target.placeholder = '';
    setHideLabel(false);
  };

  return (
    <InputWraper>
      {hideLabel ? null : <Label placeholder={placeholder} />}
      <TextInput
        // onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        onFocus={(e: any) => hendleOnFocus(e)}
        onBlur={(e: any) => hendleOnBlur(e)}
        error={error}
      />
    </InputWraper>
  );
};

export default Input;
