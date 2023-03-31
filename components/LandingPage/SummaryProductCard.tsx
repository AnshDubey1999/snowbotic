import React from "react";
import styled from "@emotion/styled";
import { SummaryProductCardProps } from "../../shared/types";
import Image from "next/image";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { darkTheme } from "../../theme/themes";

const StyledProductCard = styled(Card)`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${darkTheme.backgroundColor02};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 10px 20px ${darkTheme.backgroundColor02};
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 25px ${darkTheme.primaryColor};
    background-color: ${darkTheme.backgroundColor02};
  }
`;

const StyledGrid = styled(Grid)`
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 1;
`;

const StyledTypography = styled(Typography)`
  color: ${darkTheme.primaryColor};
  font-family: "Open Sans";
`;

const StyledTypographyTitle = styled(Typography)`
  color: ${darkTheme.fontColor};
  font-family: "Open Sans";
`;

const StyledButton = styled(Button)`
  color: ${darkTheme.primaryColor};
  font-size: 12px;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 1px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: transparent;
  }
`;

const SummaryProductCard = (props: SummaryProductCardProps) => {
  const { srcImage, title, description, altText } = props;
  return (
    <StyledGrid item xs={4}>
      <StyledProductCard sx={{ maxWidth: 300, marginTop: 8 }}>
        <CardMedia
          sx={{ height: 250, width: 300 }}
          image={srcImage}
          title={altText}
        />
        <CardContent sx={{ height: 150 }}>
          <StyledTypographyTitle gutterBottom variant="h6">
            {title}
          </StyledTypographyTitle>
          <StyledTypography variant="body2" color="text.secondary">
            {description}
          </StyledTypography>
        </CardContent>
        <CardActions>
          <StyledButton
            variant="outlined"
            size="small"
            sx={{ my: 2, display: "block" }}
          >
            Learn More
          </StyledButton>
          <StyledButton
            variant="outlined"
            size="small"
            sx={{ my: 2, display: "block" }}
          >
            Share
          </StyledButton>
        </CardActions>
      </StyledProductCard>
    </StyledGrid>
  );
};

export { SummaryProductCard };
