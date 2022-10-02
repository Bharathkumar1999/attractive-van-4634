import { Button, Container,  Flex, FormControl, FormLabel,  Grid, GridItem, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react';
//import axios from 'axios'
import { useState } from 'react';

import {Link, Navigate} from 'react-router-dom'
import { AppContext } from '../Context/AppContext';


const initState={
    name:"",
    password:""
}


    

const Login = () => {
    const{loginUser,isAuth}= useContext(AppContext)

    const [formData,setFormData]= useState(initState);

    const handleChange=(e)=>{
        const {name,value}= e.target;
        const val= name === "age" ? Number(value) : value;

        setFormData({...formData,[name]:val});
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        loginUser(formData)
    }

    if(isAuth===true){
        return <Navigate to="/products" />
      }
    

    // const handleClick=()=>{
    //     axios ({
    //         method:'POST',
    //         url: " http://localhost:5001/users",
    //         data:formData
    //     })
    //     .then((res)=>{
    //         setFormData(initState)
    //     })
        

    // }

    console.log(formData)

    const {email,password}= formData

  return (
    <Container maxW={{base:"full", lg:"container.xl"}} p={{base:1,lg:1}} display="flex" ml={{base:"5%",lg:"35%"}}    >
        <Flex h="30%" py={20} direction={{base:"column-reverse",lg:"row"}}  >
        <VStack w="full" h="full" p={10} spacing={2} alignItems='flex-start'  bg="#412A4C" >
        <VStack  spacing={3} alignItems='flex-start'  >
            <Heading color='white' fontWeight={400} lineHeight={1.1} fontSize={36}>Log In to your account</Heading>
            <Text color='white'>Let's get tracking!</Text>
        </VStack>
        
        <Grid  
            templateColumns='repeat(1, 1fr)'
            gap={2}
            w='full'
            h='full'
            bg="#412A4C"
            >
           
            <GridItem colSpan={{base:2,lg:1}} >
            <FormControl isRequired>
            <FormLabel color='rgb(252, 229, 216)'>Email</FormLabel>
            <Input type='text' name="email" placeholder='Email' value={email} onChange={handleChange} />
            </FormControl>
            </GridItem>

            <GridItem colSpan={{base:2,lg:1}} >
            <FormControl isRequired>
            <FormLabel color='rgb(252, 229, 216)'>Password</FormLabel>
            <Input type='password' name="password" placeholder='Password' value={password} onChange={handleChange} mb={2} />
            </FormControl>
            </GridItem>

            <GridItem colSpan={{base:1,lg:1}} >
            <FormControl isRequired>
            <Button w='full' bg='rgb(229, 124, 216)' variant='outline' onClick={handleSubmit} mb={8}>LOG IN</Button>
            </FormControl>
            </GridItem>

            <GridItem colSpan={{base:1,lg:1}} >
            <FormControl isRequired>
            <Text w='full' color='white'>Don't have an account ?</Text>
            </FormControl>
            </GridItem>

            <GridItem colSpan={{base:1,lg:1}} >
            <FormControl isRequired>
            <Button  w='full' bg='#ffebbd' variant='outline' ><Link to='/signup'>SIGN UP</Link></Button>
            </FormControl>
            </GridItem>

        </Grid>

    </VStack>

    
    </Flex>
</Container>

    // https://public-assets.toggl.com/b/static/a848ad9070fcf959a459fa1e878d2abb/c0583/hero-laptops.jpg
  )
}

export default Login