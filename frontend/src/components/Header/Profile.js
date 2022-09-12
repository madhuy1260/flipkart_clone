import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem, styled } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;
const Component = styled(Menu)`
  margin-top: 5px;
`;

function Profile({ account, setAccount }) {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const LogoutUser = () => {
    setAccount("");
  };

  return (
    <div>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2, cursor: "pointer" }}>
          {account}
        </Typography>
        <Component
          id="basic-menu"
          anchorEl={open}
          open={Boolean(open)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              LogoutUser();
            }}
          >
            <PowerSettingsNewIcon color="primary" fontSize="small" />
            <Logout>Logout</Logout>
          </MenuItem>
        </Component>
      </Box>
    </div>
  );
}

export default Profile;
