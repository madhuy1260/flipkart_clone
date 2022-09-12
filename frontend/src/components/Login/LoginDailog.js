import React, { useState, useContext } from "react";
import Dialog from "@mui/material/Dialog";
import { Box, TextField, Typography, Button, styled } from "@mui/material";
import { authenticateSignup, authenticateLogin } from "../services/api";
import { DataContext } from "../../Context/DataProvider";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url("https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png")
    center 85% no-repeat;
  height: 82.3%;
  width: 28%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: white;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;

  flex: 1;
  & > div,
  & > Button,
  & > p {
    margin-top: 10px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  margin-top: 20px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgb(0 0 0 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 20px;
  font-weight: 600;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations.",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here !!!",
    subHeading: "sign up with your mobile number to get started ",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};

function LoginDailog({ open, setOpen }) {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);
  const { setAccount } = useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false);
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };

  const signUpUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname);
  };

  const onValueChange = (e) => {
    const { name } = e.target;
    setLogin({ ...login, [name]: e.target.value });
  };

  const loginUser = async () => {
    const response = await authenticateLogin(login);
    if (response.status === 200) {
      handleClose();
      setAccount(response.data.firstname);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { maxWidth: "unset" } }}
      >
        <Component>
          <Box style={{ display: "flex", height: "100%" }}>
            <Image>
              <Typography variant="h5">{account.heading}</Typography>
              <Typography style={{ marginTop: 20 }}>
                {account.subHeading}
              </Typography>
            </Image>
            {account.view === "login" ? (
              <Wrapper>
                <TextField
                  variant="standard"
                  label="Enter UserName"
                  name="username"
                  onChange={(e) => onValueChange(e)}
                />
                {error && (
                  <Error>Please Enter Valid UserName or Password</Error>
                )}
                <TextField
                  variant="standard"
                  label="Enter Password"
                  name="password"
                  onChange={(e) => onValueChange(e)}
                />
                <Text>
                  By Continuing, You agree to Flipkart's Terms of Use and
                  Privacy Policy.
                </Text>
                <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                <Typography style={{ textAlign: "center" }}>OR</Typography>
                <RequestOTP>Request OTP</RequestOTP>
                <CreateAccount
                  onClick={() => toggleAccount(accountInitialValues.signup)}
                >
                  New to Flipkart? Create an Account..!
                </CreateAccount>
              </Wrapper>
            ) : (
              <Wrapper>
                <TextField
                  variant="standard"
                  onChange={(e) => onInputChange(e)}
                  name="firstname"
                  label="Enter FirstName"
                />
                <TextField
                  variant="standard"
                  onChange={(e) => onInputChange(e)}
                  name="lastname"
                  label="Enter LastName"
                />
                <TextField
                  variant="standard"
                  onChange={(e) => onInputChange(e)}
                  name="username"
                  label="Enter UserName"
                />
                <TextField
                  variant="standard"
                  onChange={(e) => onInputChange(e)}
                  name="email"
                  label="Enter Email"
                />
                <TextField
                  variant="standard"
                  onChange={(e) => onInputChange(e)}
                  name="password"
                  label="Enter Password"
                />
                <TextField
                  variant="standard"
                  onChange={(e) => onInputChange(e)}
                  name="phone"
                  label="Enter Phone Number"
                />

                <LoginButton onClick={() => signUpUser()}>Continue</LoginButton>
              </Wrapper>
            )}
          </Box>
        </Component>
      </Dialog>
    </div>
  );
}

export default LoginDailog;
