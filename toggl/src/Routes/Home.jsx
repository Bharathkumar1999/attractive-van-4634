import { Box, Button, Container,  Divider,  Flex, FormControl, FormLabel, Grid, GridItem, Heading, HStack, Image, Input, Link, List, ListIcon, ListItem, PinInput, PinInputField, Select, SimpleGrid, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React  from 'react'
import { Icon } from '@chakra-ui/react'
//import { MdCheckCircle } from 'react-icons/md'
import { CheckIcon, StarIcon } from '@chakra-ui/icons'

const Home = () => {
    const items = new Array(5).fill(0).map((a, i) => i + 1);
    
  return (
<>
<Container maxW={{base:"full", lg:"container.xl"}} p={{base:2,lg:0}} bg="#2C1338" w='full'>
    <Flex h="140vh" py={5} direction={{base:"column",lg:"row"}} >
        <VStack w="full" h="full" p={10} spacing={10} alignItems='flex-start' >
            <VStack  spacing={3} alignItems='flex-start' color="white">
                <Heading fontSize="28px"  lineHeight={1.25} textAlign="center" display="block" h={20}>Simple time tracking to save you time and money.</Heading>
                <Text fontSize={17} color="#FCE5D8" >Bill accurately, measure profitability, manage workloads — and spend less time on it all.</Text>
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
                    <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type='text'  placeholder='Email'   resize="none" w='full'/>
                    </FormControl>
                    </GridItem>

                    

                    <GridItem colSpan={{base:1,lg:1}} >
                    <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input type='password'  placeholder='Password' w='full'   />
                    </FormControl>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Button w='full' mt={4} bg="#E57CD8" borderRadius={8}>
                        SIGN UP
                    </Button>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Text fontSize={12} color="#FCE5D8" mt={6} >By signing up, you agree to our terms of service, privacy policy and to receiving marketing communication from Toggl Track. You can opt out anytime.</Text>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Text mt={6} fontSize="1.15rem" color="#D5D0D7" letterSpacing="0.25px" fontWeight={400}>TRUSTED BY OVER 6 MILLION USERS ACROSS 120 COUNTRIES</Text>
                    </GridItem>

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Image src="https://public-assets.toggl.com/b/static/f6d9af91a4ee6ce7f2939828f016b078/3ccbb/brands-mixed-mobile-light.png" h={20} pl={16} lineHeight={1.1} fontSize={16} fontWeight={400} mt={4}/>
                    </GridItem>

                    


                </Grid>
                
           
            </Box>
        
        </VStack>

        <VStack w='full' h='full' p={4} spacing={4} alignItems='flex-start' bg="#2C1338" >


            <SimpleGrid columns={1} spacing={10} w='full' p={2}>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>

                <Box>
                    <Button w="75%" h={20} fontSize={20} alignItems="center">Stand-up meeting</Button>
                </Box>
               

                <Box >
                    <Text color="#FCE5D8" pl={55} fontWeight={400} fontSize={22} lineHeight={1.35} w={400} display="block" textAlign="center" >“I love the ease of just clocking in and out with just one click!”</Text>
                    <Text color="#FCE5D8" pl={60} mt={4} textAlign="auto" >– Quelani P.</Text>
                </Box>
        
                
            </SimpleGrid>
        </VStack>

    </Flex>
</Container>

<Container maxW="8xl" bg="white" mb={10}>

      <Box p='2'>
        <Heading size='lg' color="#412A4C" fontWeight={400} lineHeight={1.25} textAlign="center" display="block"  mb={5} >
            Time tracking for all your productivity and profitability needs</Heading>
      </Box>

      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        <GridItem colSpan={{base:1,lg:1}} >
                    <Button w='full' mt={4}  borderRadius={8} bg="#412A4C" color="#ffebbd">
                    Employee time tracking
                    </Button>
        </GridItem>
        <GridItem colSpan={{base:1,lg:1}} >
                    <Button w='full' mt={4}  borderRadius={8} bg="#ffebbd" color="#412A4C">
                    Billing & invoicing
                    </Button>
        </GridItem>
        <GridItem colSpan={{base:1,lg:1}} >
                    <Button w='full' mt={4}  borderRadius={8} bg="#ffebbd" color="#412A4C">
                    Project budgeting
                    </Button>
        </GridItem>
        <GridItem colSpan={{base:1,lg:1}} >
                    <Button w='full' mt={4} bg="#ffebbd" borderRadius={8} color="#412A4C">
                    Reporting
                    </Button>
        </GridItem>
        <GridItem colSpan={{base:1,lg:1}} >
                    <Button w='full' mt={4} bg="#ffebbd" borderRadius={8} color="#412A4C">
                    Payroll
                    </Button>
        </GridItem>
      </Grid>
    
    

</Container> 

<Container maxW={{base:"full", lg:"container.xl"}} p={{base:2,lg:0}}  w='full' >
    <Flex h="80vh" py={5} direction={{base:"column",lg:"row"}}  >
        <VStack  p={10} spacing={10} alignItems='flex-start' bg="#2C1338">
            <VStack  spacing={3} alignItems='flex-start' color="white" >
                <Heading fontSize={40} fontWeight={400} lineHeight={1.1}>Make timesheets history.</Heading>
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={CheckIcon} color='green.500' />
                        Get the data you need without disrupting your team's workflow. Track's one-click time tracking syncs across multiple platforms.  
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckIcon} color='green.500' />
                        Get employee buy-in with a tool designed to empower teams with knowledge, not micromanage them.
                    </ListItem>     
                </List>
               
            </VStack>
            
            <Box >
                <Grid  
                    templateColumns='repeat(1, 1fr)'
                    gap={2}
                    w='full'
                    h='full'
                    color="white"
                    >

                    <GridItem colSpan={{base:1,lg:1}} >
                    <Button w='full' mt={4} bg="#E57CD8" borderRadius={8} ml={15}>
                        Learn more
                    </Button>
                    </GridItem>

                </Grid>
            </Box>
        </VStack>

        <VStack w='full' h='full' p={4} spacing={4} alignItems='flex-start' bg="#2C1338" >


            <SimpleGrid columns={1} spacing={10} w='full' p={2}>
                <Box pl={8} display="block" textAlign="center">
                    <Image src="https://public-assets.toggl.com/b/static/2f9323cffe44aa5a7b876e19dbd12a09/428cd/employee-time-tracking-short.png" alignItems="center" pl={4}/>
                </Box>
            </SimpleGrid>
        </VStack>

    </Flex>
</Container>

<Container maxW={{base:"full", lg:"container.xl"}} p={{base:2,lg:0}} bg="#2C1338" w='full' >
    <Heading color="#FFF3ED" fontSize="28px" fontWeight={400} lineHeight={1.25} display="block" pt={16} mt={8}>Why do teams love Toggl Track?</Heading>
    <Flex h="80vh" py={5} direction={{base:"column",lg:"row"}} >
        <VStack w="full" h="full" p={10} spacing={10} alignItems='flex-start' bg="#f7d8f3" gap="10px" mr={4} ml={4}>
            <VStack  spacing={3} alignItems='flex-start' color="white">
                {/* <Heading fontSize={40} fontWeight={400} lineHeight={1.1}>Users report up to 25% increase in billable hours with accurate time tracking that accounts for every minute spent on client work.</Heading> */}
                <Text fontSize={19} color="#412A4C" display="block" textAlign='center' lineHeight={1.15} >Users report up to 25% increase in billable hours with accurate time tracking that accounts for every minute spent on client work.</Text>
                <Link color="#6B5A74">Learn More</Link>
            </VStack>

            <Box>
                <Image src="https://public-assets.toggl.com/b/static/6286ab8ed1c02d9625e9ba57ad687f8e/ed077/feature-increasebillables.png"/>
            </Box>
        
        </VStack>

        <VStack w='full' h='full' p={4} spacing={4} alignItems='flex-start' bg="#FCE5D8;" >

        <VStack  spacing={3} alignItems='flex-start' color="white" p={30} borderRadius={10}>
                {/* <Heading fontSize={40} fontWeight={400} lineHeight={1.1}>Users report up to 25% increase in billable hours with accurate time tracking that accounts for every minute spent on client work.</Heading> */}
                <Text fontSize={17} color="#412A4C" display="block" textAlign='center' lineHeight={1.15}>Speed up team adoption with an anti-surveillance platform that gets a "yes" from every employee.</Text>
                <Link color="#6B5A74">Learn More</Link>
            </VStack>

            <Box>
                <Image src="https://public-assets.toggl.com/b/static/a2fbe9cda087f0b4ddf3b1f8f768e34f/eff87/feature-trustemployee.png"/>
            </Box>
            <Box>
                <Text>Toggl Track stands against surveillance.</Text>
            </Box>
        
        </VStack>
    </Flex>

    <Flex h="120vh" py={5} direction={{base:"column",lg:"row"}} >
        <VStack w="full" h="full" p={10} spacing={10} alignItems='flex-start' bg="#f7d8f3" gap="10px" mr={4} ml={4}>
            <VStack  spacing={3} alignItems='flex-start' color="white">
                {/* <Heading fontSize={40} fontWeight={400} lineHeight={1.1}>Users report up to 25% increase in billable hours with accurate time tracking that accounts for every minute spent on client work.</Heading> */}
                <Text fontSize={17} color="#412A4C" >No training necessary. Get started right away with intuitive and welcoming features.</Text>
                <Link color="#6B5A74">Learn More</Link>
            </VStack>

            <Box>
                <Image src="https://public-assets.toggl.com/b/static/ee6383ab7e873edf369c3c6b373a3164/2923c/feature-intuitive.png"/>
            </Box>
            <Box>
                <Text>“The acceptance from all users is very high. I have seen a 40+ year employee move from their Excel-based tracking they have used forever, to this tool without any issue.”</Text>
            </Box>
            <Box>
            {items.map((item) => (
                <StarIcon  key={item}
                    color="black.300"
                />
                ))}
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                    5/5 Stars on G2.com
                </Box>
                <Box ml='2'>
                <Text>— Chris B, Systems Application Lead in an enterprise team</Text> 
                </Box>  
            </Box>  
            
            
            
        
        </VStack>

        <VStack w='full' h='full' p={4} spacing={4} alignItems='flex-start' bg="#FCE5D8;" >

        <VStack  spacing={3} alignItems='flex-start' color="white" p={30} borderRadius={10}>
                {/* <Heading fontSize={40} fontWeight={400} lineHeight={1.1}>Users report up to 25% increase in billable hours with accurate time tracking that accounts for every minute spent on client work.</Heading> */}
                <Text fontSize={17} color="#412A4C" >Make time tracking and reporting a breeze with a beautifully-designed app experience.</Text>
                <Link color="#6B5A74">Learn More</Link>
            </VStack>

            <Box>
                <Image src="https://public-assets.toggl.com/b/static/ab5bff19a9536d90c2c584c3e402ff1c/b2f4e/feature-onetrack.png"/>
            </Box>
            <Box>
                <Text>“I love that it's simple and the aesthetic is beautiful. It's really intuitive and not super complicated.”</Text>
            </Box>
            <Box>
            {items.map((item) => (
                <StarIcon  key={item}
                    color="black.300"
                />
                ))}
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                    5/5 Stars on G2.com
                </Box>
                <Box ml='2'>
                <Text>— Chris B, Systems Application Lead in an enterprise team</Text> 
                </Box>  
            </Box>  
        
        </VStack>

        

    </Flex>
    <Flex h="80vh" py={5} direction={{base:"column",lg:"row"}} >
        <VStack w="full" h="full" p={10} spacing={10} alignItems='flex-start' bg="#f7d8f3" gap="10px"  ml={4} >
            <VStack  spacing={3} alignItems='flex-start' color="white">
                <Heading color="#412A4C">The only time tracking tool with over 100+ integrations</Heading>
                <Text color="#412A4C">From Asana to Zapier, Jira, Salesforce and much more — integrate Toggl Track with tools your team already uses.</Text>
                <Link color="#412A4C">Explore integrations</Link>

               
            </VStack>

            
            
            
            
        
        </VStack>

        <VStack w='full' h='full' p={4} spacing={4} alignItems='flex-start' bg="#f7d8f3" >

            

            <Box>
                <Image src="https://public-assets.toggl.com/b/static/ebd5e3f62e8f0ff1038ea4b37811be34/0e4a3/feature-integrations.png" h="300px" display="block" alignItems="right"/>
            </Box>
           
            
        
        </VStack>


    
    </Flex>
    <Heading color="white">Join 5 million users tracking their time to get results</Heading>
    <Text color="white">All plans come with a free, 30-day trial of Toggl Track Premium. Upgrade at the end of the trial or continue using Track for free.</Text>
    <Button bg="#E57CD8">Start Tracking for free</Button>
</Container>



<Container maxW={{base:"full", lg:"container.xl"}} p={{base:2,lg:0}} bg="white" w='full'>
    <Heading color="#412A4C" fontSize={28} fontWeight={400} lineHeight={1.25} textAlign="center" display="block">Companies that use Toggl Track see results in profit and productivity</Heading>
    <Flex h="80vh" py={5} direction={{base:"column",lg:"row"}} >

        <VStack w='full' h='full' p={4} spacing={4} alignItems='flex-start' bg="white" >

        <VStack  spacing={3} alignItems='flex-start' color="white" p={30} borderRadius={10}>
                {/* <Heading fontSize={40} fontWeight={400} lineHeight={1.1}>Users report up to 25% increase in billable hours with accurate time tracking that accounts for every minute spent on client work.</Heading> */}
                <Text color="#E57CD8" fontWeight={400} fontSize={20} ml={5}>20% increase in profitability</Text>
                <Text fontSize={17} color="#412A4C" lineHeight={1.5} m={0} display="block" fontWeight={400}  >at Sweat+Co PR agency, with accurate billable hours tracking.</Text>
                <Link color="#6B5A74">Read case study</Link>
            </VStack>

            <Box>
                <Image src="https://public-assets.toggl.com/b/static/688b536c11e2e2d366240687a2e83c1a/81bf6/cs-team-sweatandco.jpg"/>
            </Box>
        </VStack>
        

        <VStack w='full' h='full' p={4} spacing={4} alignItems='flex-start' bg="white;" >

        <VStack  spacing={3} alignItems='flex-start' color="white" p={30} borderRadius={10}>
                {/* <Heading fontSize={40} fontWeight={400} lineHeight={1.1}>Users report up to 25% increase in billable hours with accurate time tracking that accounts for every minute spent on client work.</Heading> */}
                <Text color="#E57CD8" fontWeight={400} fontSize={20} ml={5}>100% time tracking adoption</Text>
                <Text fontSize={17} color="#412A4C" lineHeight={1.5} m={0} display="block" fontWeight={400}  >at software consultancy Newlogic for accurate reporting.</Text>
                <Link color="#6B5A74">Read case study</Link>
            </VStack>

            <Box>
                <Image src="https://public-assets.toggl.com/b/static/23cc7d4553237da72a6cd3f8f3aef5f5/81bf6/cs-newlogic.jpg"/>
            </Box>
        </VStack>

        <VStack w='full' h='full' p={4} spacing={4} alignItems='flex-start' bg="white;" >

        <VStack  spacing={3} alignItems='flex-start' color="white" p={30} borderRadius={10}>
                {/* <Heading fontSize={40} fontWeight={400} lineHeight={1.1}>Users report up to 25% increase in billable hours with accurate time tracking that accounts for every minute spent on client work.</Heading> */}
                <Text color="#E57CD8" fontWeight={400} fontSize={20} ml={5}>40+ hours saved per month</Text>
                <Text fontSize={17} color="#412A4C" lineHeight={1.5} m={0} display="block" fontWeight={400}  >at Perception Engineering with simple, one-click time tracking and invoicing.</Text>
                <Link color="#6B5A74">Read case study</Link>
            </VStack>

            <Box>
                <Image src="https://public-assets.toggl.com/b/static/52ecd2ee94b3c4b931b6cee0c7dab0e3/81bf6/case-study-perception-engineering.jpg"/>
            </Box>
        </VStack>
    </Flex>

</Container>


<Container maxW={{base:"full", lg:"container.xl"}} p={{base:2,lg:0}} bg="#FCE5D8;" w='full'>
    <Flex h="25vh" py={5} direction={{base:"column",lg:"row"}} >
        <VStack w="full" h="full" p={10} spacing={10} alignItems='flex-start' >
            <VStack  spacing={3} alignItems='flex-start' color="white" pr={8}>
                <Heading fontSize={24} fontWeight={400} lineHeight={1.3} color="#412A4C" display="block">Onboarding a large team? We’d love to show you around.</Heading>
                <Text fontSize={17} color="#6B5A74" lineHeight={1.5} display="block" fontWeight={400} >Teams of 10+ are eligible for a custom demo to see how Toggl Track works at scale.</Text>
            </VStack>
        
            

           
        
        </VStack>

        <VStack w='full' h='full' p={4} spacing={4} alignItems='flex-start' bg="#FCE5D8;" >


            <SimpleGrid columns={1} spacing={10} w='full' p={2}>
                <Spacer/>
               

                <Box>
                    <Button w='75%' color="white" bg="#E57CD8" borderRadius={26}  >Book a demo</Button>
                </Box>
               

                {/* <Box >
                    <Text color="#FCE5D8" pl={55} fontWeight={400} fontSize={22} lineHeight={1.35} w={400} display="block" textAlign="center" >“I love the ease of just clocking in and out with just one click!”</Text>
                    <Text color="#FCE5D8" pl={60} mt={4} textAlign="auto" >– Quelani P.</Text>
                </Box> */}
        
                
            </SimpleGrid>
        </VStack>

    </Flex>
    

    <Flex h="25vh" py={5} direction={{base:"column",lg:"row"}} >
        <VStack w="full" h="full" p={10} spacing={10} alignItems='flex-start' >
            <VStack  spacing={3} alignItems='flex-start' color="#412A4C;" pr={8}>
            <List spacing={3}>
                    <ListItem>
                        <ListIcon as={CheckIcon} color='pink.500' />
                        Cross-platform apps for all time tracking preferences.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckIcon} color='pink.500' />
                        Top-rated support with a response time of 3 hours!
                    </ListItem>     
            </List>
                {/* <Heading fontSize={24} fontWeight={400} lineHeight={1.3} color="#412A4C" display="block">Onboarding a large team? We’d love to show you around.</Heading>
                <Text fontSize={17} color="#6B5A74" lineHeight={1.5} display="block" fontWeight={400} >Teams of 10+ are eligible for a custom demo to see how Toggl Track works at scale.</Text> */}
            </VStack>
        
            

           
        
        </VStack>

        <VStack w="full" h="full" p={10} spacing={10} alignItems='flex-start' >
            <VStack  spacing={3} alignItems='flex-start' color="#412A4C;" pr={8}>
            <List spacing={3}>
                    <ListItem>
                        <ListIcon as={CheckIcon} color='pink.500' />
                        GDPR-compliant. Your security is our priority
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckIcon} color='pink.500' />
                        99% uptime for your peace of mind.
                    </ListItem>     
            </List>
                {/* <Heading fontSize={24} fontWeight={400} lineHeight={1.3} color="#412A4C" display="block">Onboarding a large team? We’d love to show you around.</Heading>
                <Text fontSize={17} color="#6B5A74" lineHeight={1.5} display="block" fontWeight={400} >Teams of 10+ are eligible for a custom demo to see how Toggl Track works at scale.</Text> */}
            </VStack>
        
            

           
        
        </VStack>


        

        

    </Flex>
</Container>

<Container maxW="8xl" bg="white" mb={20}>

      <Box p='2'>
        <Heading size='md' color="#412A4C" fontWeight={400} lineHeight={1.25} textAlign="center" display="block"  >
        The right feature set for every team</Heading>
      </Box>

      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        <GridItem colSpan={{base:1,lg:1}} >
                    <Button w='full' mt={4}  borderRadius={8} bg="#412A4C" color="#ffebbd">
                    Freelancers
                    </Button>
        </GridItem>
        <GridItem colSpan={{base:1,lg:1}} >
                    <Button w='full' mt={4}  borderRadius={8} bg="#ffebbd" color="#412A4C">
                    Agencies & professional services
                    </Button>
        </GridItem>
        <GridItem colSpan={{base:1,lg:1}} >
                    <Button w='full' mt={4}  borderRadius={8} bg="#ffebbd" color="#412A4C">
                    Enterprise teams
                    </Button>
        </GridItem>
        
      </Grid>
    
    

</Container> 

<Container maxW={{base:"full", lg:"container.xl"}} p={{base:2,lg:0}}  w='full' >
    <Flex h="80vh" py={5} direction={{base:"column",lg:"row"}}  >
        <VStack  p={10} spacing={10} alignItems='flex-start' bg="white">
            <VStack  spacing={3} alignItems='flex-start' color="white" >
                <Heading fontSize={40} fontWeight={400} lineHeight={1.1} color="#412A4C">Need time tracking that helps you stay productive and bill clients accurately?</Heading>
                <Text color="#EA96E0" fontSize="1rem">Learn how Toggl Track can help you</Text>
                <Stack direction='row' h='100px' p={4}>
                <Divider orientation='vertical' color="black.800" />
                <Text color="black">"Toggl Track is indispensable for keeping track of my hours by project so I can create invoices. It makes it easy to calculate the time I need for certain types of work. All in all, it is the best way to accurately prepare your financial claims."
                Ema N. (Editor)</Text>
                </Stack>
               
            </VStack>
            
            
        </VStack>

        <VStack w='full' h='full' p={4} spacing={4} alignItems='flex-start' bg="white" >


            <SimpleGrid columns={1} spacing={10} w='full' p={2}>
                <Box>
                    <Image src="https://public-assets.toggl.com/b/static/bed57e40b10610cc4477f5d05bcb524d/efbf5/type-freelancer.png"/>
                </Box>
            </SimpleGrid>
        </VStack>

    </Flex>

    </Container>



  
    

    
</>        
   
    
  )
}

export default Home