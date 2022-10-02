import { Box, Button, Container, Flex,  Heading, HStack,  Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { Link   } from 'react-router-dom';


const Navbar = () => {
  return (
    <Container maxW='8xl' m={0} p={0} >
        <Flex minWidth='max-content' alignItems='center'  bg='#e57cd8' p={0} m={0} >
        
            <Spacer />
            <HStack h={8}>
                <Text fontSize={{base:8,lg:13}}>Back to Toggl Global</Text><Spacer/>
                <Text  href="/products" fontSize={{base:8,lg:13}}>Products</Text><Spacer/>
                <Text fontSize={{base:8,lg:13}}>Blog</Text><Spacer/>
                <Text fontSize={{base:8,lg:13}}>Our Mission</Text><Spacer/>
                <Text fontSize={{base:8,lg:13}}>Working at Toggl</Text><Spacer/>

            </HStack>
        
        </Flex>
    


        <Flex py="1rem" bg="#2C1338" color="white" my={0}>
            <Link to='/' ><Heading color="#e57cd8">toggl</Heading></Link>
            <HStack>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Link to='/products' fontSize={{base:12,lg:16}}>Product</Link><Spacer/>
                <Text fontSize={{base:12,lg:16}}>Pricing</Text><Spacer/>
                <Text fontSize={{base:12,lg:16}}>Why Track?</Text><Spacer/>
                <Text fontSize={{base:12,lg:16}}>Careers</Text><Spacer/>
            </HStack>
            
            <Spacer />
            <HStack>

            {/* <Link to="/">HOME</Link>
            <Link to="/products">PRODUCTS</Link> */}
                
                <Link to='/demo' fontSize={{base:12,lg:16}}>Book a demo </Link>
                <Box>|</Box>
                <Link to="/login" fontSize={{base:12,lg:16}}>Log In</Link>

            </HStack>

            
            <Button mx={2} color="#e57cd8" bg="#FFF3ED" p={{base:2,lg:4}} fontSize={{base:10,md:12}} size={{base:"xm",lg:"lg"}}><Link to='/signup'>Try for free</Link></Button>
        </Flex>


    
    </Container>
  )
}

export default Navbar