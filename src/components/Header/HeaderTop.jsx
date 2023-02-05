import React from "react";
import { Styled } from "./HeaderTop.styled";
import Box from "@mui/material/Box";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import PublicIcon from "@mui/icons-material/Public";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import { Fade, Paper, Popper, Typography } from "@mui/material";

const HeaderTop = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Styled.HeaderTopWrapper>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingX="5.3rem"
      >
        <Box fontSize="1.5rem" marginLeft="5px3">
          <img src="/images/logo.png" className="w-[6rem]" />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box
            display="flex"
            marginLeft="1rem"
            onClick={handleClick("bottom-start")}
          >
            <PublicIcon />
            <Typography paddingLeft="5px">UAE</Typography>
          </Box>
          <Box display="flex" marginX="1rem">
            <RequestQuoteIcon />
            <Typography paddingLeft="5px">Pkr</Typography>
          </Box>
          <Box display="flex" marginX="1rem">
            <GTranslateIcon />
            <Typography paddingLeft="5px">English</Typography>
          </Box>
        </Box>
      </Box>
    </Styled.HeaderTopWrapper>
  );
};

export default HeaderTop;
