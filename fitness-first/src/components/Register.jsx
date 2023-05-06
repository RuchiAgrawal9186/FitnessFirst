import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import { dataContext } from '../context/DatacontextProvider';
// import { useContext } from 'react';
import "react-toastify/dist/ReactToastify.css";
// import { Navigate } from 'react-router-dom';
import {
  FormControl,
  Center,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  Button,
  HStack,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";

// const dataContext = React.createContext()

export const Register = () => {
  const authEmail = useSelector((state) => state.authReducer.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [data,setdata]=useState([])

  const Validation = () => {
    let validate = true;
    // let errormessege = "please enter details"

    if (username == "") {
      validate = false;
      toast.warning("please enter usename");
    }
    if (email == "") {
      validate = false;
      toast.warning("please enter email");
    }
    if (password == "") {
      validate = false;
      toast.warning("please enter password");
    }

    if (email == authEmail) {
      toast.warning("user already registered");
      validate = false;
    }

    return validate;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (Validation()) {
      const userdetails = {
        username,
        email,
        password,
      };

      dispatch({ type: "REGISTER", payload: userdetails });
      setemail("");
      setpassword("");
      setusername("");
      navigate("/login");
    }
  };

  return (
    <>
      <ToastContainer theme="colored"></ToastContainer>

      <Center>
        <Box
          border="1px solid black"
          w={{ base: "30%", md: "30%", sm: "20%" }}
          height={{ base: "450px", md: "450px", sm: "200px" }}
          margin="auto"
          marginTop="2%"
          boxShadow="dark-lg"
        >
          <h2
            style={{
              fontFamily: "sans-serif",
              marginTop: "2%",
              textAlign: "center",
            }}
          >
            Registration form
          </h2>
          <FormControl isRequired marginTop="4%">
            {/* <FormLabel>Username</FormLabel> */}
            <Input
              placeholder="Enter Username"
              type="text"
              w={{ base: "50%", md: "60%", sm: "15%" }}
              border="1px solid black"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              name="username"
              id="username"
            />
            {/* <FormLabel>Email</FormLabel> */}
            <HStack></HStack>
            <Input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              marginTop="5%"
              placeholder="Enter Email"
              w={{ base: "50%", md: "60%", sm: "15%" }}
              border="1px solid black"
              name="email"
              id="email"
            />

            <Center>
              <InputGroup
                size="md"
                w={{ base: "50%", md: "60%", sm: "15%" }}
                marginTop="5%"
              >
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  border="1px solid black"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  name="password"
                  id="password"
                  isRequired
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={handleClick}
                    backgroundColor="black"
                    color="white"
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Center>
            <Input
              type="submit"
              value="Register"
              backgroundColor="black"
              color="white"
              w={{ base: "50%", md: "60%", sm: "15%" }}
              marginTop="5%"
              onClick={handlesubmit}
            ></Input>
            <Text marginTop="2%">
              if you already login? then click here
              <Link to="/login" style={{ color: "blue" }}>
                {" "}
                Login
              </Link>
            </Text>
          </FormControl>
        </Box>
      </Center>
    </>
  );
};

// export Register
