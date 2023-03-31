import React from "react";
import { Avatar, Card, CardContent, Rating, Typography } from "@mui/material";
import { TestimonialCardProps } from "../../shared/types";
import styled from "@emotion/styled";
import { darkTheme } from "../../theme/themes";

const StyledCard = styled(Card)`
  background-color: ${darkTheme.primaryColor};
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  margin-right: 40px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: scale(0.95);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3), 0 0 1px rgba(0, 0, 0, 0.1);
  }
`;

const StyledTypography = styled(Typography)`
  font-family: "Open Sans";
  font-weight: 900;
`;

const TestimonialCard = (props: TestimonialCardProps) => {
  const { name, description, altText, avatarImage, stars } = props;

  return (
    <StyledCard sx={{ maxWidth: 400, maxHeight: 250 }}>
      <Avatar
        alt={altText}
        src={avatarImage}
        sx={{ my: 1.5, width: 50, height: 50 }}
      />
      <Rating name="read-only" value={stars} readOnly />
      <CardContent>
        <StyledTypography gutterBottom variant="h6">
          {name}
        </StyledTypography>
        <StyledTypography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: 12 }}
        >
          {description}
        </StyledTypography>
      </CardContent>
    </StyledCard>
  );
};

export { TestimonialCard };
