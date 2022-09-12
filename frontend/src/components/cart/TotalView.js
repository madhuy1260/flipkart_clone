import React, { useState, useEffect } from "react";
import { Box, Typography, styled } from "@mui/material";

const Heading = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`;

const HeadingType = styled(Typography)`
  color: #878787;
`;

const Container = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
  & > h6 {
    margin-bottom: 20px;
  }
`;

const Discount = styled(Typography)`
  color: green;
  font-weight: 600;
`;

const Price = styled(Box)`
  float: right;
`;

function TotalView({ CartItems }) {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const totalAmount = () => {
    let price = 0,
      discount = 0;

    // eslint-disable-next-line array-callback-return
    CartItems.map((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };

  useEffect(() => {
    totalAmount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Heading>
        <HeadingType>Price Details</HeadingType>
      </Heading>
      <Container>
        <Typography>
          Price ({CartItems?.length} item)
          <Price component="span">₹ {price}</Price>
        </Typography>
        <Typography>
          Discount ({CartItems?.length} item)
          <Price component="span">-₹ {discount}</Price>
        </Typography>
        <Typography>
          Delivery Charges ({CartItems?.length} item)
          <Price component="span">₹ 40</Price>
        </Typography>
        <Typography variant="h6">
          Total Amount ({CartItems?.length} item)
          <Price component="span">₹ {price - discount + 40}</Price>
        </Typography>
        <Discount>You will Save ₹ {discount - 40} on this Order</Discount>
      </Container>
    </Box>
  );
}

export default TotalView;
