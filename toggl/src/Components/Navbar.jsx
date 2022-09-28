import { Box, Button, Container, Flex, Grid, Heading, HStack, Link, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Container maxW="8xl">
        <Flex minWidth='max-content' alignItems='center'  bg='#e57cd8'>
        {/* <Box p='2'>
            <Heading size='md'>Chakra App</Heading>
        </Box> */}
        <Spacer />
        <HStack h={8}>
            <Link fontSize={13}>Back to Toggl Global</Link><Spacer/>
            <Link fontSize={13}>Products</Link><Spacer/>
            <Link fontSize={13}>Blog</Link><Spacer/>
            <Link fontSize={13}>Our Mission</Link><Spacer/>
            <Link fontSize={13}>Working at Toggl</Link><Spacer/>

        </HStack>
        
        </Flex>
    {/* <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        <Box w='70px' h='10' bg='blue.500' />
        <Box w='170px' h='10' bg='blue.500' />
        <Box w='180px' h='10' bg='blue.500' />
    </Grid> */}



    <Flex py="1rem" bg="#2C1338" color="white" my={0}>
      <Heading color="#e57cd8">toggl</Heading>
      <HStack>
      <Spacer/>
      <Spacer/>
      <Spacer/>
      <Link>Product</Link><Spacer/>
      <Link>Pricing</Link><Spacer/>
      <Link>Why Track?</Link><Spacer/>
      <Link>Careers</Link><Spacer/>
      </HStack>
      
      <Spacer />
      <HStack>
        <Link >Book a demo  |</Link>
        <Link to="/login">Log In</Link>

      </HStack>

        
      {/* <Button mx={2}>LOGIN</Button> */}
      <Button mx={2} color="#e57cd8" bg="#FFF3ED">Try for free</Button>
    </Flex>


    
    </Container>
  )
}

export default Navbar