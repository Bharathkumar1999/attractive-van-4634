import { Box, Container, Flex, Grid, GridItem, Heading, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Container maxW={{base:"full", lg:"container.xl"}} p={{base:2,lg:0}} bg="#2C1338" w='full'>
        <Flex h="140%" py={5} direction={{base:"column",lg:"row"}} >
        
        <VStack w="full" h="full" p={10} spacing={10} alignItems='flex-start' >
            
            <VStack  spacing={3} alignItems='flex-start' color="white">
                <Heading fontSize="28px"  lineHeight={1.25} textAlign="center" display="block" h={20} color="#e57cd8"></Heading>
                <Text fontSize={17} color="#FCE5D8" mt={4} ml={15} pl={4}>TOGGL GLOBAL</Text>
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
                    <Text>Blog</Text>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Text>Our Mission</Text>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Text>Working at Toggl</Text>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Text>Legal Terms</Text>
                    </GridItem>

                </Grid>
                
            </Box>

        
        </VStack>


        <VStack w="full" h="full" p={10} spacing={10} alignItems='flex-start' >
            <VStack  spacing={3} alignItems='flex-start' color="white">
                
                <Heading fontSize="28px"  lineHeight={1.25} textAlign="center" display="block" h={20}></Heading>
                <Text fontSize={17} color="#FCE5D8" mt={4} ml={15} pl={4}>PRODUCT</Text>
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
                    <Text>Features</Text>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Text>Pricing</Text>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Text>Integration</Text>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Text>Case Studies</Text>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Text>API</Text>
                    </GridItem>


                </Grid>
                
           
            </Box>
        
        </VStack>

        <VStack w="full" h="full" p={10} spacing={10} alignItems='flex-start' >
            <VStack  spacing={3} alignItems='flex-start' color="white">
                <Spacer/>
                <Heading fontSize="28px"  lineHeight={1.25} textAlign="center" display="block" h={20}></Heading>
                <Text fontSize={17} color="#FCE5D8" mt={4} ml={15} pl={4}>USE CASES</Text>
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
                    <Text>Billing</Text>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Text>Employee Time Tracking</Text>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Text>Project Budgeting</Text>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Text>Reporting</Text>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Text>Payroll</Text>
                    </GridItem>
                    
                </Grid>
                
           
            </Box>
        
        </VStack>

        <VStack w="full" h="full" p={10} spacing={10} alignItems='flex-start' >
            <VStack  spacing={3} alignItems='flex-start' color="white">
                <Spacer/>
                <Heading fontSize="28px"  lineHeight={1.25} textAlign="center" display="block" h={20}></Heading>
                <Text fontSize={17} color="#FCE5D8" mt={4} ml={15} pl={4}>DOWNLOAD</Text>
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
                    <Text>Mobile Apps</Text>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Text>Desktop Apps</Text>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Text>Browser Extensions</Text>
                    </GridItem>


                </Grid>
                
           
            </Box>
        
        </VStack>

        <VStack w="full" h="full" p={10} spacing={10} alignItems='flex-start' >
            <VStack  spacing={3} alignItems='flex-start' color="white">
                <Spacer/>
                <Heading fontSize="28px"  lineHeight={1.25} textAlign="center" display="block" h={20}></Heading>
                <Text fontSize={17} color="#FCE5D8" mt={4} ml={15} pl={10}>HELP</Text>
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
                    <Text>Support & Knowledge</Text>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Text>Base</Text>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Text>Request a Demo</Text>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Text>Contact Us</Text>
                    </GridItem>


                </Grid>
                
           
            </Box>
        
        </VStack>

        <VStack w="full" h="full" p={10} spacing={10} alignItems='flex-start' >
            <VStack  spacing={3} alignItems='flex-start' color="white">
                <Spacer/>
                <Heading fontSize="28px"  lineHeight={1.25} textAlign="center" display="block" h={20}></Heading>
                <Text fontSize={17} color="#FCE5D8" mt={4} ml={15} pl={4}>RESOURCES</Text>
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
                    <Text>Time Management Hub</Text>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Text>Work From Home Hub</Text>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Text>Business Resources</Text>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Text>Media Kit</Text>
                    </GridItem>


                </Grid>
                
           
            </Box>
        
        </VStack>

        </Flex>
    </Container>
  )
}

export default Footer