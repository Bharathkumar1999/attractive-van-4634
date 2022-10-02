import { Button, Container, Flex,  VStack,  Badge } from '@chakra-ui/react'
import React from 'react'
import {
    Table,
    Thead,
    Tbody,
  
    Tr,
    Th,
    Td,
   
    TableContainer,
  } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Product = () => {
    const{logoutUser}= useContext(AppContext)
  return (
    <Container maxW={{base:"full", lg:"container.xl"}} p={{base:2,lg:0}}  >
        <Flex h="250%"  direction={{base:"column-reverse",lg:"row"}}>
        <VStack w={{base:"5%",lg:"10%"}} h={{base:"0%",lg:"full"}} p={4} spacing={4} alignItems='flex-start' bg={{base:"none", lg:"#2C1338"}}>
        
       
         <VStack  spacing={3} alignItems='flex-start'  >
            
            <Badge color='rgb(130, 113, 136)' bg='#2C1338' fontSize={{base:"0", lg:"sm"}}>TRACK</Badge>
            <Button bg={{base:"0", lg:"#2C1338"}} color='grey' size='sm' fontSize={{base:"0", lg:"sm"}}>Timer</Button>
            <Badge color='rgb(130, 113, 136)' bg='#2C1338' fontSize={{base:"0", lg:"sm"}}>ANALYZE</Badge>
            <Button bg={{base:"0", lg:"#2C1338"}} color='grey' size='sm' fontSize={{base:"0", lg:'sm'}}>Reports</Button>
            <Button bg={{base:"0", lg:"#2C1338"}} color='grey' size='sm' fontSize={{base:"0", lg:"sm"}}>Insights</Button>
            <Badge color='rgb(130, 113, 136)' bg='#2C1338' fontSize={{base:"0", lg:"sm"}}>MANAGE</Badge>
            <Button bg={{base:"0", lg:"#2C1338"}} color='grey' size='sm' fontSize={{base:"0", lg:"sm"}}>Project</Button>
            <Button bg={{base:"0", lg:"#2C1338"}} color='grey' size='sm' fontSize={{base:"0", lg:"sm"}}>Clients</Button>
            <Button bg={{base:"0", lg:"#2C1338"}} color='grey' size='sm' fontSize={{base:"0", lg:"sm"}}>Team</Button>
            <Badge color='rgb(130, 113, 136)' bg='#2C1338' fontSize={{base:"0", lg:"sm"}}>WORKSPACE</Badge>
            <Button bg={{base:"0", lg:"#2C1338"}} color='grey' size='sm' fontSize={{base:"0", lg:"sm"}} onClick={()=>logoutUser()}>Logout</Button>
            
        </VStack>
        
    </VStack>

    <VStack w='full' h='full' p={4} spacing={12} alignItems='flex-start' >
        <TableContainer>
            <Table variant='simple'>
                {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                <Thead>
                <Tr>
                    <Th></Th>
                    <Th>MONDAY</Th>
                    <Th>TUEDAY</Th>
                    <Th>WEDNESDAY</Th>
                    <Th>THURSDAY</Th>
                    <Th>FRIDAY</Th>
                    <Th>SATURDAY</Th>
                    <Th>SUNDAY</Th>
                    
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td>1:00 AM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
                </Tr>
                <Tr>
                    <Td>2:00 AM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
                </Tr>
                <Tr>
                    <Td>3:00 AM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
                </Tr>
                <Tr>
                    <Td>4:00 AM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
                </Tr>
                <Tr>
                    <Td>5:00 AM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
                </Tr>
                <Tr>
                    <Td>6:00 AM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
                </Tr>
                <Tr>
                    <Td>7:00 AM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
                </Tr>
                <Tr>
                    <Td>8:00 AM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
                </Tr>
                <Tr>
                    <Td>9:00 AM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
                </Tr>
                <Tr>
                    <Td>10:00 AM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
                </Tr>
                <Tr>
                    <Td>11:00 AM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
                </Tr>
                <Tr>
                    <Td>12:00 AM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
                </Tr>
                <Tr>
                    <Td>1:00 PM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
                </Tr>
                <Tr>
                    <Td>2:00 PM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
                </Tr>
                <Tr>
                    <Td>3:00 PM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
               
                </Tr>
                <Tr>
                    <Td>4:00 PM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
                  
                </Tr>
                <Tr>
                    <Td>5:00 PM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
                </Tr>
                <Tr>
                    <Td>6:00 PM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
                   
                </Tr>
                <Tr>
                    <Td>7:00 PM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
                
                </Tr>
                <Tr>
                    <Td>8:00 PM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
                 
                </Tr>
                <Tr>
                    <Td>9:00 PM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
               
                </Tr>
                <Tr>
                    <Td>10:00 PM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
                
                </Tr>
                <Tr>
                    <Td>11:00 PM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
                    
                </Tr>
                <Tr>
                    <Td>12:00 PM</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> 
                    
                </Tr>
                </Tbody>
                {/* <Tfoot>
                <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                    <Th>To convert</Th>
                    <Th>into</Th>
                </Tr>
                </Tfoot> */}
            </Table>
        </TableContainer>




        {/* <Center w='full'>
            <Image  borderRadius="full" boxSize="250px" />
        </Center>
        <Divider/>
        <SimpleGrid columns={2} spacing={10} w='full' p={4}>
            <Box>
                <Text >Name</Text>
            </Box>
           
            <Box>
                <Text >Phone</Text>
            </Box>
           
            <Box>
                <Text>Email</Text>
            </Box>
           
            <Box>
                <Text>Age</Text>
            </Box>
          
            <Box>
                <Text>Address</Text>
            </Box>
          
            <Box>
                <Text>Country</Text>
            </Box>
        

        </SimpleGrid> */}
    </VStack>
           
        </Flex>
    </Container>
  )
}

export default Product