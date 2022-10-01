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


    

const SignUp = () => {
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

    const {name,phone,email,age,gender,country}= formData

  return (
    <Container maxW={{base:"full", lg:"container.xl"}} p={{base:2,lg:0}} display="flex" ml="35%" >
        <Flex h="150vh" py={20} direction={{base:"column-reverse",lg:"row"}}  >
        <VStack w="full" h="full" p={10} spacing={10} alignItems='flex-start' >
        <VStack  spacing={3} alignItems='flex-start'>
            <Heading>Create Profile Here</Heading>
            <Text>Please Fill In The Details Here</Text>
        </VStack>
        
        <Grid  
            templateColumns='repeat(1, 1fr)'
            gap={2}
            w='full'
            h='full'
            >
            <GridItem colSpan={{base:1,lg:1}} >
            <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input type='text' name="name" placeholder='First name' value={name} onChange={handleChange} resize="none" />
            </FormControl>
            </GridItem>

            <GridItem colSpan={{base:1,lg:1}} >
            <FormControl isRequired>
            <FormLabel>Phone</FormLabel>
            <Input type='text' name="phone" placeholder='Phone' value={phone} onChange={handleChange} />
            </FormControl>
            </GridItem>

            <GridItem colSpan={{base:1,lg:1}} >
            <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type='text' name="email" placeholder='Email' value={email} onChange={handleChange} />
            </FormControl>
            </GridItem>

            <GridItem colSpan={{base:1,lg:1}} >
            <FormControl isRequired>
            <FormLabel>Age</FormLabel>
            <Input type='number' name="age" placeholder='Age' value={age} onChange={handleChange} />
            </FormControl>
            </GridItem>

            <GridItem colSpan={{base:1,lg:1}} >
            <FormControl>
            <FormLabel>Gender</FormLabel>
            <Select placeholder='Select gender' name="gender" value={gender} onChange={handleChange}>
                <option>Male</option>
                <option>Female</option>
            </Select>
            </FormControl>
            </GridItem>

            <GridItem colSpan={{base:1,lg:1}} >
            <FormControl>
            <FormLabel>Country</FormLabel>
            <Select placeholder='Select country' name="country" value={country} onChange={handleChange}>
                <option>India</option>
                <option>USA</option>
            </Select>
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

export default SignUp