import React, { useState, useContext } from "react";
import { Box, Button, Typography, styled, Badge } from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import LoginDailog from "../Login/LoginDailog";
import { DataContext } from "../../Context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 auto",
  "& >*": {
    marginRight: "40px !important",
    fontSize: "16px",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  color: "inherit",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)`
  background: white;
  color: #2874f0;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
  margin-left: 40px;
  margin-right: 20px;
`;

function CustomButton() {
  const [open, setOpen] = useState(false);
  const { CartItems } = useSelector((state) => state.CartDetails);
  const { account, setAccount } = useContext(DataContext);

  return (
    <div>
      <Wrapper>
        {account ? (
          <Profile account={account} setAccount={setAccount} />
        ) : (
          <LoginButton variant="contained" onClick={() => setOpen(true)}>
            Login
          </LoginButton>
        )}

        <Typography style={{ marginTop: 3, width: 135 }}>
          Become a Seller
        </Typography>
        <Typography style={{ marginTop: 3 }}>More</Typography>
        <Container to="/cart">
          <Badge badgeContent={CartItems.length} color="secondary">
            <ShoppingCart />
          </Badge>
          <Typography style={{ marginLeft: 15 }}>Cart</Typography>
        </Container>
        <LoginDailog open={open} setOpen={setOpen} />
      </Wrapper>
    </div>
  );
}

export default CustomButton;
