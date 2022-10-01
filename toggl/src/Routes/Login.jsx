import { Button, Container, Textarea, Flex, FormControl, FormLabel, Select, Grid, GridItem, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import axios from 'axios'
import { useState } from 'react';

const initState={
    name:"",
    phone:"",
    email:"",
    age:"",
    address:"",
    country:"",
    profile_pic:""
}


    

const Login = () => {
    const [formData,setFormData]= useState(initState);

    const handleChange=(e)=>{
        const {name,value}= e.target;
        const val= name === "age" ? Number(value) : value;

        setFormData({...formData,[name]:val});
    }

    const handleClick=()=>{
        axios ({
            method:'POST',
            url: " http://localhost:5001/users",
            data:formData
        })
        .then((res)=>{
            setFormData(initState)
        })
        

    }

    console.log(formData)

    const {email,password}= formData

  return (
    <Container maxW={{base:"full", lg:"container.xl"}} p={{base:1,lg:1}} display="flex" ml="35%"  >
        <Flex h="30%" py={20} direction={{base:"column-reverse",lg:"row"}}  >
        <VStack w="full" h="full" p={10} spacing={2} alignItems='flex-start' >
        <VStack  spacing={3} alignItems='flex-start'>
            <Heading>Login</Heading>
            <Text>Please Fill In The Details Here</Text>
        </VStack>
        
        <Grid  
            templateColumns='repeat(1, 1fr)'
            gap={2}
            w='full'
            h='full'
            >
           
            <GridItem colSpan={{base:2,lg:1}} >
            <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type='text' name="email" placeholder='Email' value={email} onChange={handleChange} />
            </FormControl>
            </GridItem>

            <GridItem colSpan={{base:2,lg:1}} >
            <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input type='text' name="password" placeholder='Password' value={password} onChange={handleChange} />
            </FormControl>
            </GridItem>

            <GridItem colSpan={{base:1,lg:1}} >
            <FormControl isRequired>
            <Button w='full' variant='outline' onClick={handleClick}>CREATE PROFILE</Button>
            
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