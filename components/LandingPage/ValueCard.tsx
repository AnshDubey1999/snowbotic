import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { ValueCardProps } from "../../shared/types";
import styled from "@emotion/styled";
import { darkTheme } from "../../theme/themes";

const StyledCard = styled(Card)`
  background-color: ${darkTheme.primaryColor03};
  margin: 3vh 3vw;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const StyledTypography = styled(Typography)`
  font-family: "Open Sans";
`;

const ValueCard = (props: ValueCardProps) => {
  const { title, description } = props;

  return (
    <StyledCard sx={{ maxWidth: 345 }}>
      <CardContent>
        <StyledTypography gutterBottom variant="h6">
          {title}
        </StyledTypography>
        <StyledTypography variant="body2" color="text.secondary">
          {description}
        </StyledTypography>
      </CardContent>
    </StyledCard>
  );
};

export { ValueCard };
