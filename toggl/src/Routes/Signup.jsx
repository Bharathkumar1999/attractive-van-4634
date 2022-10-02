import { Button, Container,  Flex, FormControl, FormLabel, Select, Grid, GridItem, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react';
//import axios from 'axios'
import { useState } from 'react';
import {Link} from 'react-router-dom'

const initState={
    name:"",
    phone:"",
    email:"",
    age:"",
    address:"",
    country:"",
    profile_pic:""
}




    

const SignUp = () => {
    const [formData,setFormData]= useState(initState);

    const handleChange=(e)=>{
        const {name,value}= e.target;
        const val= name === "age" ? Number(value) : value;

        setFormData({...formData,[name]:val});
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

    const {name,password,email,age,gender,country}= formData

  return (
    <Container maxW={{base:"full", lg:"container.xl"}} p={{base:2,lg:0}} display="flex" ml={{base:"5%",lg:"35%"}} >
        <Flex h="150%" py={20} direction={{base:"column-reverse",lg:"row"}}  >
        <VStack w="full" h="full" p={10} spacing={10} alignItems='flex-start' bg="#412A4C" >
        <VStack  spacing={3} alignItems='flex-start'>
            <Heading color='white' fontWeight={400} lineHeight={1.1} fontSize={36}>Create Your Account</Heading>
            <Text color='white'>Please Fill your Details Here</Text>
        </VStack>
        
        <Grid  
            templateColumns='repeat(1, 1fr)'
            gap={2}
            w='full'
            h='full'
            >
            <GridItem colSpan={{base:1,lg:1}} >
            <FormControl isRequired>
            <FormLabel color='rgb(252, 229, 216)'>Name</FormLabel>
            <Input type='text' name="name" placeholder='First name' value={name} onChange={handleChange} resize="none" />
            </FormControl>
            </GridItem>

            <GridItem colSpan={{base:1,lg:1}} >
            <FormControl isRequired>
            <FormLabel color='rgb(252, 229, 216)'>Password</FormLabel>
            <Input type='password' name="password" placeholder='Password' value={password} onChange={handleChange} />
            </FormControl>
            </GridItem>

            <GridItem colSpan={{base:1,lg:1}} >
            <FormControl isRequired>
            <FormLabel color='rgb(252, 229, 216)'>Email</FormLabel>
            <Input type='text' name="email" placeholder='Email' value={email} onChange={handleChange} />
            </FormControl>
            </GridItem>

            <GridItem colSpan={{base:1,lg:1}} >
            <FormControl isRequired>
            <FormLabel color='rgb(252, 229, 216)'>Age</FormLabel>
            <Input type='number' name="age" placeholder='Age' value={age} onChange={handleChange} />
            </FormControl>
            </GridItem>

            <GridItem colSpan={{base:1,lg:1}} >
            <FormControl>
            <FormLabel color='rgb(252, 229, 216)'>Gender</FormLabel>
            <Select placeholder='Select gender' name="gender" value={gender} onChange={handleChange} color='grey'>
                <option>Male</option>
                <option>Female</option>
            </Select>
            </FormControl>
            </GridItem>

            <GridItem colSpan={{base:1,lg:1}} >
            <FormControl>
            <FormLabel color='rgb(252, 229, 216)'>Country</FormLabel>
            <Select placeholder='Select country' name="country" value={country} onChange={handleChange} color='grey'>
                <option>India</option>
                <option>USA</option>
            </Select>
            </FormControl>
            </GridItem>

            <GridItem colSpan={{base:1,lg:1}} >
            <FormControl isRequired>
            <Button w='full' variant='outline'  bg='rgb(229, 124, 216)' mt={2}><Link to='/login'>SIGN UP</Link></Button>
            
            </FormControl>
            </GridItem>
        </Grid>
        

    </VStack>
    
            
           

        </Flex>
    </Container>

    // https://public-assets.toggl.com/b/static/a848ad9070fcf959a459fa1e878d2abb/c0583/hero-laptops.jpg
  )
}

export default SignUp