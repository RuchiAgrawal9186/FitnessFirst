import React from 'react'
import {useState} from "react"
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
// import { dataContext } from '../context/DatacontextProvider';
// import { AuthContext } from '../context/AuthContextProvider';
import { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
import {
    FormControl,
    Center,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    // VStack,
    HStack,
    // Container,
    Box,
    Text
    
  } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { LOGIN_SUCCESS } from '../Redux/AuthReducer/actionTypes';
// import { AuthContext } from '../context/AuthContextProvider';

const Login = () => {
  const auth = useSelector( state => state.authReducer.isAuth );
  const authEmail = useSelector( state => state.authReducer.email );
  const authPassword = useSelector( state => state.authReducer.password );
  const username = useSelector(state=> state.authReducer.user)
  console.log(authEmail, authPassword, auth)
  const dispatch = useDispatch()

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    // const [data,setdata]=useState([])

    const navigate = useNavigate();
    let validate = true

    const Validation = ()=>{

      
      // let errormessege = "please enter details"

      if(email=="")
      {
        validate=false
        toast.warning("please enter email")
      }
      if(password=="")
      {
        validate=false
        toast.warning("please enter password")
      }
      return validate
    }


    const handlesubmit = (e) =>{
      e.preventDefault()
         
         if(Validation())
         {
        
          if(email==authEmail && password==authPassword)
          {
            dispatch({type: LOGIN_SUCCESS, typeload:{email, password, username}})
            toast.success("Login Successfully")
            return true
          }
          else{
            toast.warning("User is not registered")
            return false
          }
        
      }

       }

       if(auth)
       {
        console.log(true)
        toast.success("Login Successfully")
       setTimeout(() => {
         return navigate("/")
       },100);
       }
   

  return (
    <>
    <ToastContainer theme="colored"></ToastContainer>
    <Center>
        <Box border="1px solid black" w={{base:"30%", md:"30%",sm:"20%"}} height={{base:"400px",md:"400px",sm:"200px"}} margin="auto" marginTop="2%" boxShadow='dark-lg'>
            <h2 style={{fontFamily:"sans-serif",marginTop:"2%",textAlign:"center"}}>Login form</h2>
    <FormControl isRequired marginTop="4%" >
    
    <HStack></HStack>
      <Input type='email' onChange={(e)=> setemail(e.target.value)} marginTop="3%"placeholder='Enter Email' w={{base:"50%",md:"60%",sm:"15%"}} border="1px solid black" name="email" id="email" value={email}/>
     
      <Center>
       <InputGroup size='md' w={{base:"50%",md:"60%",sm:"15%"}} marginTop="5%" >
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        border="1px solid black"
        name="password"
        value={password}
        onChange={(e)=> setpassword(e.target.value)}
        id="password"/>
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick} backgroundColor="black" color="white">
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    </Center>
    <Input type="submit" value="Login" onClick={handlesubmit} backgroundColor="black" color="white" w={{base:"50%",md:"60%",sm:"15%"}} marginTop="5%"></Input>
    <Text marginTop="2%">if you are new user? then click here<Link to="/register" style={{color:"blue"}}> Register</Link></Text>
    </FormControl>
    </Box>
    </Center>
    </>

  )
}

export default Login
