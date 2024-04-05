// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React, { FC, HTMLAttributes } from "react";
import {
  ScreenTitleContainerProps,
  ScreenTitleProps,
} from "./ScreenTitle.types";
import { breakPoints } from "../../global/utils";
import styled from "styled-components";
import Box from "../Box/Box";
import get from "lodash/get";
import { lightV2 } from "../../global/themes";

const ScreenTitleContainer = styled.div<ScreenTitleContainerProps>(
  ({ theme, sx, bottomBorder }) => ({
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    "& .stContainer": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 8,
      width: "100%",
    },
    "& .headerBarIcon": {
      color: get(theme, `screenTitle.iconColor`, lightV2.fontColor),
      "& .min-icon": {
        width: 44,
        height: 44,
      },
    },
    "& .headerBarSubheader": {
      color: get(theme, `screenTitle.subtitleColor`, lightV2.mutedText),
      fontSize: 14,
    },
    "& .titleColumn": {
      height: "auto",
      justifyContent: "center",
      display: "flex",
      flexFlow: "column",
      alignItems: "flex-start",
      "& h1": {
        fontSize: 20,
        fontWeight: "normal",
        color: get(theme, `screenTitle.iconColor`, lightV2.fontColor),
      },
    },
    "& .leftItems": {
      display: "flex",
      alignItems: "center",
      gap: 12,
    },
    "& .rightItems": {
      display: "flex",
      alignItems: "center",
      gap: 10,
    },
    [`@media (max-width: ${get(breakPoints, "md", 0)}px)`]: {
      "& .stContainer": {
        flexDirection: "column",
        gap: 12,
        flexFlow: "column",
        alignItems: "flex-start",
      },
      "& .headerBarIcon": { display: "none" },
      "& .headerBarSubheader": {
        display: "flex",
        flexDirection: "column",
      },
      "& .rightItems": {
        width: "100%",
        justifyContent: "center",
      },
    },
    ...sx,
  }),
);

const ScreenTitle: FC<ScreenTitleProps & HTMLAttributes<HTMLDivElement>> = ({
  icon,
  subTitle = "",
  title,
  actions,
  bottomBorder = true,
  sx,
  ...restProps
}) => {
  return (
    <ScreenTitleContainer
      className={"screen-title"}
      sx={sx}
      bottomBorder={bottomBorder}
      {...restProps}
    >
      <Box className={"stContainer"}>
        <Box className={"leftItems"}>
          {icon ? <Box className={"headerBarIcon"}>{icon}</Box> : null}
          <Box className={"titleColumn"}>
            <h1 style={{ margin: 0 }}>{title}</h1>
            <span className={"headerBarSubheader"}>{subTitle}</span>
          </Box>
        </Box>
        <Box className={"rightItems"}>{actions}</Box>
      </Box>
    </ScreenTitleContainer>
  );
};

export default ScreenTitle;
