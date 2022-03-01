import type { ChoiceButtonProps } from './type';
import { Button, Text, Icon } from './style';
import React from 'react';

const ChoiceButton = ({
  text,
  icon,
  isSmall = false,
  isChoice,
}: ChoiceButtonProps) => {
  return (
    <Button isChoice={isChoice} isSmall={isSmall}>
      {icon ? <Icon>{icon}</Icon> : null}
      {/* FIXME: translate */}
      {/* {text ? <Text>{lenguageTextSwitcher(text)}</Text> : null} */}
    </Button>
  );
};

export default ChoiceButton;
