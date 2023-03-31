import * as React from "react";

import { Menu as MenuIcon } from "@mui/icons-material";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";

import { darkTheme } from "../../theme/themes";

import styled from "@emotion/styled";
import Image from "next/image";

const pages = ["Home", "Products", "Contact", "About us"];

const StyledAppBar = styled(AppBar)`
  background-color: transparent;
  box-shadow: none;
`;

const StyledButton = styled(Button)`
  color: #ffffff;
  font-size: 1vw;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 1px;
  padding: 18px;
  transition: all 0.2s ease-in-out;

  ::after {
    content: "";
    width: 0%;
    height: 2px;
    background: ${darkTheme.primaryColor04};
    display: block;
    margin: auto;
    transition: 0.5s;
  }

  &:hover {
    background-color: transparent;
    ::after {
      width: 100%;
    }
  }

  &:focus {
    color: ${darkTheme.primaryColor04};
  }
`;

const LoginButton = styled(Button)`
  color: ${darkTheme.primaryColor};
  font-size: calc(0.75vw + 0.5vh);
  font-weight: 500;
  text-transform: none;
  letter-spacing: 1px;
  transition: all 0.2s ease-in-out;
  border-color: ${darkTheme.primaryColor};

  &:hover {
    background-color: transparent;
    border-color: ${darkTheme.primaryColor02};
  }
`;

const GetStartedButton = styled(Button)`
  color: ${darkTheme.fontInverseColor};
  background-color: ${darkTheme.primaryColor};
  font-size: calccalc(0.75vw + 0.5vh);
  font-weight: 500;
  text-transform: none;
  letter-spacing: 1px;
  transition: all 0.2s ease-in-out;
  border-color: ${darkTheme.primaryColor};
  &:hover {
    background-color: ${darkTheme.primaryColor02};
    color: ${darkTheme.fontInverseColor};
  }
`;

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Image
              src="/images/logo-snowbots.png"
              height={75}
              width={130}
              alt="Snowbots"
              style={{
                marginRight: -20,
              }}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 9,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <StyledButton
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </StyledButton>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <LoginButton
              variant="outlined"
              size="large"
              sx={{ my: 2, display: "block" }}
            >
              Login
            </LoginButton>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <GetStartedButton
              variant="contained"
              size="large"
              sx={{ my: 2, display: "block", ml: 3 }}
            >
              Get Started
            </GetStartedButton>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};
export { Header };
