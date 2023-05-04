import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
//   import "../Css/Login.css"
import "../CSS/Login.css"
  export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
       <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
 
       
 
       <div >
          <img className='image' src="https://st2.depositphotos.com/4763221/42030/i/600/depositphotos_420303190-stock-photo-tula-russia-september-08-2020.jpg" alt="" />
       </div>
       <div className='primary2'>
 
       
      <Flex 
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading className='Size' textAlign={'center'}>
              Sign up
            </Heading>
            <Text className='Size2' fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <div className='Primary'>
 
          
          <Box 
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel className='Name'>First Name</FormLabel>
                    <Input className='input' type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel className='Name'>Last Name</FormLabel>
                    <Input className='input' type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel className='Name'>Email address</FormLabel>
                <Input className='input2' type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel className='Name'>Password</FormLabel>
                <InputGroup>
                  <Input className='input2' type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button autoFocus
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon  viewBox='0 0 24 24' className='icon' p={"2.5px"} boxSize={35}/> : <ViewOffIcon  boxSize={35} p={"2.5px"} className='icon'/>}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button className="button"
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'} className='Name3'>
                  Already a user? <Link className='Name2' color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </div>
        </Stack>
      </Flex>
      </div>
      </div>
    );
  }