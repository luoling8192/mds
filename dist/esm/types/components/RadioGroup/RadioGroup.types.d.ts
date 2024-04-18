import React from "react";
import { OverrideTheme, SelectorType } from "../../global/global.types";
import { CommonHelpTipPlacement } from "../HelpTip/HelpTip.types";
export interface RadioGroupProps {
  label?: string;
  tooltip?: string;
  selectorOptions: SelectorType[];
  currentValue: string;
  id: string;
  name: string;
  disableOptions?: boolean;
  displayInColumn?: boolean;
  className?: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    extraValue?: any,
  ) => void;
  sx?: OverrideTheme;
  helpTip?: React.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
export interface OptionsContainerProps {
  inColumn: boolean;
}
