import { Box, Button, Container, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Image, Input, List, ListIcon, ListItem, Select,  Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { CheckIcon } from '@chakra-ui/icons'

const Demo = () => {
  return (
    <Container maxW={{base:"full", lg:"container.xl"}} p={{base:2,lg:0}}  w='full'>
    <Flex h="110%" py={5} direction={{base:"column",lg:"row"}} bg="#2C1338">
        <VStack w="full" h="full" p={10} spacing={10} alignItems='flex-start' bg="#2C1338" >
            <VStack  spacing={3} alignItems='flex-start' color="white">
                <Heading fontSize="28px"  lineHeight={1.25} fontWeight={400} textAlign="center" display="block" h={20}>Book your free demo of Toggl Track</Heading>
                <Text fontSize={16} color="#FCE5D8" fontWeight={400} lineHeight={1.25} >Explore how you can use Toggl Track with your team to:</Text>
                <List spacing={1} justifyContent="space-evenly">
                    <ListItem>
                        <ListIcon as={CheckIcon} color='green.500' />
                        Accurately scope projects and pinpoint scope creep  
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckIcon} color='green.500' />
                        Plan and quote project budgets with confidence
                    </ListItem>   
                    <ListItem>
                        <ListIcon as={CheckIcon} color='green.500' />
                        Improve staffing and team allocation
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckIcon} color='green.500' />
                        Ensure project and client profitability
                    </ListItem>    
                    <ListItem>
                        <ListIcon as={CheckIcon} color='green.500' />
                        Integrate time tracking with the tools your team uses
                    </ListItem>
                    
                </List>
               
            </VStack>
        
            <Box>
                <Grid  
                    templateColumns='repeat(1, 1fr)'
                    gap={2}
                    w='full'
                    h='full'
                    color="white"
                    >
                    

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Text mt={6} fontSize="1.15rem" color="#D5D0D7" letterSpacing="0.25px" fontWeight={400}>TRUSTED BY OVER 6 MILLION USERS ACROSS 120 COUNTRIES</Text>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Image src="https://public-assets.toggl.com/b/static/d5dd37832260bffcfe09bba86d08aa51/729c7/logo-demo-companies-mobile.png" h='120px' pl={16} lineHeight={1.1} fontSize={16} fontWeight={400} mt={4}/>
                    </GridItem>

                </Grid>
                
           
            </Box>
        
        </VStack>
        <VStack w="full" h="full" p={10} spacing={10} alignItems='flex-start' bg='rgb(252, 229, 216)' >
        <VStack  spacing={3} alignItems='flex-start'>
            <Heading fontSize={22} fontWeight="400px" lineHeight="normal" color='#33475b' fontFamily='Inter, sans-serif'>Onboarding a large team? Teams of 10+ are eligible for a custom 30-minute demo.</Heading>
            {/* <Text>Please Fill In The Details Here</Text> */}
        </VStack>
        
        <Grid  
            templateColumns='repeat(2, 1fr)'
            gap={2}
            w='full'
            h='full'
            >
            <GridItem colSpan={{base:2,lg:1}} >
            <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input type='text' name="name" placeholder='First name'   resize="none" bg='white' />
            </FormControl>
            </GridItem>

            <GridItem colSpan={{base:2,lg:1}} >
            <FormControl isRequired>
            <FormLabel>Phone</FormLabel>
            <Input type='text' name="phone" placeholder='Phone' bg='white'  />
            </FormControl>
            </GridItem>

            <GridItem colSpan={{base:2,lg:1}} >
            <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type='text' name="email" placeholder='Email' bg='white'  />
            </FormControl>
            </GridItem>

            <GridItem colSpan={{base:2,lg:1}} >
            <FormControl isRequired>
            <FormLabel>Age</FormLabel>
            <Input type='number' name="age" placeholder='Age' bg='white'  />
            </FormControl>
            </GridItem>

            {/* <GridItem colSpan={{base:2,lg:2}} >
            <FormControl isRequired>
            <FormLabel>Address</FormLabel>
            <Textarea type='text' name="address" placeholder='Address' bg='white'  />
            </FormControl>
            </GridItem> */}

            <GridItem colSpan={{base:2,lg:2}} >
            <FormControl>
            <FormLabel>Gender</FormLabel>
            <Select placeholder='Select gender' name="gender" bg='white' >
                <option>Male</option>
                <option>Female</option>
                <option>Prefer Not to Say</option>
            </Select>
            </FormControl>
            </GridItem>


            <GridItem colSpan={{base:2,lg:2}} >
            <FormControl>
            <FormLabel>Country</FormLabel>
            <Select placeholder='Select country' name="country" bg='white' >
                <option>USA</option>
                <option>India</option>
                <option>Canada</option>
            </Select>
            </FormControl>
            </GridItem>

            


            {/* <GridItem colSpan={{base:2,lg:2}} >
            <FormControl isRequired>
            <FormLabel>Profile Pic URL</FormLabel>
            <Textarea type='text' name="profile_pic" placeholder='Profile Pic URL' bg='white' />
            </FormControl>
            </GridItem> */}

            <GridItem colSpan={{base:2,lg:2}} >
            <FormControl isRequired>
            <Button w='full' variant='outline' bg='#E57CD8' fontSize={16} lineHeight={16} color='white'>SUBMIT</Button>
            
            </FormControl>
            </GridItem>
        </Grid>
        

    </VStack>

        {/* <VStack w='full' h='full' p={4} spacing={4} alignItems='flex-start' bg="#2C1338" >


            
        </VStack> */}

    </Flex>
</Container>
  )
}

export default Demo