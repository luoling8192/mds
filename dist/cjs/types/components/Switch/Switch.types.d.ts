import React from "react";
import { CommonHelpTipPlacement } from "../HelpTip/HelpTip.types";
import { OverrideTheme } from "../../global/global.types";
export interface MainSwitchProps {
  id: string;
  label?: string;
  tooltip?: string;
  sx?: OverrideTheme;
  className?: string;
  switchOnly?: boolean;
  indicatorLabels?: string[];
  description?: string;
  helpTip?: React.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
export interface IndicatorProps {
  active: boolean;
  children: React.ReactNode;
}
export interface SwitchContainerProps {
  sx?: OverrideTheme;
}
export type SwitchProps = MainSwitchProps &
  React.InputHTMLAttributes<HTMLInputElement>;
