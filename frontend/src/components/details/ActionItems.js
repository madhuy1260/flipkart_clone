import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { payUsingPaytm } from "../services/api";
import { post } from "../../utils/paytm";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px",
});

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: "15px",
  width: "48%",
  height: "50",

  borderRadius: "4",
  [theme.breakpoints.down("lg")]: {
    marginTop: "15",
    width: "48%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: "15px",
  },
}));

function ActionItems({ product }) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(product.id, quantity));
    navigate("/cart", { setQuantity: setQuantity });
  };

  const buyNow = async () => {
    let response = await payUsingPaytm({
      amount: 500,
      email: "y.madhu1260@gmail.com",
    });

    let information = {
      action: "https://securegw.stage.paytm.in/order/process",
      params: response,
    };
    post(information);
  };

  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          width: "90%",
          border: "1px solid #f0f0f0",
        }}
      >
        <Image src={product.detailUrl} alt="product" />
      </Box>
      <StyledButton
        variant="contained"
        onClick={() => addItemToCart()}
        style={{ marginRight: 10, background: "#ff9f00" }}
      >
        <ShoppingCartIcon />
        Add to Cart
      </StyledButton>
      <StyledButton
        onClick={() => buyNow()}
        variant="contained"
        style={{ background: "#fb541b" }}
      >
        <FlashOnIcon />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
}

export default ActionItems;
