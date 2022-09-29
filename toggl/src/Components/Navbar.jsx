import { Box, Button, Container, Flex, Grid, Heading, HStack, Link, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Container maxW='8xl'>
        <Flex minWidth='max-content' alignItems='center'  bg='#e57cd8' p={0} m={0}>
        
            <Spacer />
            <HStack h={8}>
                <Link fontSize={{base:8,lg:13}}>Back to Toggl Global</Link><Spacer/>
                <Link fontSize={{base:8,lg:13}}>Products</Link><Spacer/>
                <Link fontSize={{base:8,lg:13}}>Blog</Link><Spacer/>
                <Link fontSize={{base:8,lg:13}}>Our Mission</Link><Spacer/>
                <Link fontSize={{base:8,lg:13}}>Working at Toggl</Link><Spacer/>

            </HStack>
        
        </Flex>
    


        <Flex py="1rem" bg="#2C1338" color="white" my={0}>
            <Heading color="#e57cd8">toggl</Heading>
            <HStack>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Link fontSize={{base:12,lg:16}}>Product</Link><Spacer/>
                <Link fontSize={{base:12,lg:16}}>Pricing</Link><Spacer/>
                <Link fontSize={{base:12,lg:16}}>Why Track?</Link><Spacer/>
                <Link fontSize={{base:12,lg:16}}>Careers</Link><Spacer/>
            </HStack>
            
            <Spacer />
            <HStack>
                <Link fontSize={{base:12,lg:16}}>Book a demo </Link>
                <Box>|</Box>
                <Link to="/login" fontSize={{base:12,lg:16}}>Log In</Link>

            </HStack>

            
            <Button mx={2} color="#e57cd8" bg="#FFF3ED" p={{base:2,lg:0}} fontSize={{base:8,md:12}} size={{base:"xm",lg:"lg"}}>Try for free</Button>
        </Flex>


    
    </Container>
  )
}

export default Navbar