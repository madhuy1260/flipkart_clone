import { ButtonGroup, Button, styled } from "@mui/material";
import { useSelector } from "react-redux";
import React from "react";

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  border-radius: 50%;
`;

function GroupedButton({ setQuantity }) {
  const { CartItems } = useSelector((state) => state.CartDetails);

  let quantity = CartItems[0].quantity;

  return (
    <Component>
      <StyledButton>-</StyledButton>
      <StyledButton disabled>{quantity}</StyledButton>
      <StyledButton>+</StyledButton>
    </Component>
  );
}

export default GroupedButton;
