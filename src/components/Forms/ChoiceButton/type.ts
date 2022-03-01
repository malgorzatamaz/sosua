export type ChoiceButtonProps = {
  // text?: LenguageText;
  // FIXME:
  text?: any;
  icon?: React.ReactNode;
  isSmall?: boolean;
  preferenceId?: string;
  isChoice?: boolean;

  radioButton?: boolean;
  parentCallback?: any;
  userClick?: boolean;
};
