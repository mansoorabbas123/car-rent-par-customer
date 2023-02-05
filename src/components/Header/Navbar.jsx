import { Box } from "@mui/system";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Styled } from "./Navbar.styled";
import { styled, useMediaQuery } from "@mui/material";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import StarIcon from "@mui/icons-material/Star";
import RssFeedIcon from "@mui/icons-material/RssFeed";

const Header = styled(AppBar)(({ theme }) => ({
  "&.MuiAppBar-root": {
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 2%)",
  },
}));

const Navbar = () => {
  const matches = useMediaQuery("(max-width:847px)");

  const Nav = styled(Toolbar)(({ theme }) => ({
    "&.MuiToolbar-root": {
      backgroundColor: matches ? "#4d4d4d" : "#fff",
      minHeight: "3.2rem",
      padding: "0 5rem",
      borderBottom: "2px solid #FF0063",
    },
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header position="static">
        <Nav>
          {matches ? (
            <>
              {" "}
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Logo
              </Typography>
              <Button color="inherit">Login</Button>
            </>
          ) : (
            <Styled.NavbarWrapper>
              <div className="navlinks">
                <div className="link link1">
                  <span>
                    <DirectionsCarFilledIcon
                      color="#4d4d4d"
                      fontSize="24px"
                      sx={{ marginTop: "3px", marginRight: "8px" }}
                    />
                  </span>
                  <span className="link_text">HOME</span>
                </div>
                <div className="link link2">
                  <span>
                    <StarIcon
                      color="#4d4d4d"
                      fontSize="24px"
                      sx={{ marginTop: "3px", marginRight: "8px" }}
                    />
                  </span>
                  <span className="link_text">ABOUT US</span>
                </div>

                <div className="link link3">
                  <span>
                    <RssFeedIcon
                      color="#4d4d4d"
                      fontSize="24px"
                      sx={{ marginTop: "3px", marginRight: "8px" }}
                    />
                  </span>
                  <span className="link_text">SERVICES</span>
                </div>
                <div className="link link4">
                  <span>
                    <RssFeedIcon
                      color="#4d4d4d"
                      fontSize="24px"
                      sx={{ marginTop: "3px", marginRight: "8px" }}
                    />
                  </span>
                  <span className="link_text">OUR FLEET</span>
                </div>
                <div className="link link5">
                  <span>
                    <RssFeedIcon
                      color="#4d4d4d"
                      fontSize="24px"
                      sx={{ marginTop: "3px", marginRight: "8px" }}
                    />
                  </span>
                  <span className="link_text">CONTACT US</span>
                </div>

                <div className="link link6">
                  <span>
                    <RssFeedIcon
                      color="#4d4d4d"
                      fontSize="24px"
                      sx={{ marginTop: "3px", marginRight: "8px" }}
                    />
                  </span>
                  <span className="link_text">BLOGS</span>
                </div>
              </div>
              <div className="search">
                <input type="text" />
                <div>
                  <SearchIcon />
                </div>
              </div>
            </Styled.NavbarWrapper>
          )}
        </Nav>
      </Header>
    </Box>
  );
};

export default Navbar;
